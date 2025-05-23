// app/api/paypal/checkout/route.ts
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

// 🔒 Secure PayPal server-side credentials
const PAYPAL_API = process.env.PAYPAL_API ?? "https://api-m.sandbox.paypal.com";
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID!;
const PAYPAL_SECRET_KEY = process.env.PAYPAL_SECRET_KEY!;
const TOKEN_SECRET = process.env.TOKEN_SECRET!;

async function getAccessToken() {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET_KEY}`).toString(
    "base64"
  );
  const res = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    throw new Error("Failed to authenticate with PayPal");
  }

  const data = await res.json();
  return data.access_token;
}

export async function POST(req: NextRequest) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let decodedToken: JwtPayload;
  try {
    const decoded = jwt.verify(token, TOKEN_SECRET);
    if (typeof decoded === "string" || !("user" in decoded)) {
      throw new Error("Invalid token payload");
    }
    decodedToken = decoded as JwtPayload;
    console.log(decodedToken);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Invalid or expired token" },
      { status: 403 }
    );
  }

  let orderID: string;
  try {
    const body = await req.json();
    orderID = body.orderID;
    if (!orderID) throw new Error("Missing orderID");
  } catch {
    return NextResponse.json(
      { message: "Invalid request body" },
      { status: 400 }
    );
  }

  try {
    const accessToken = await getAccessToken();

    const capture = await fetch(
      `${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await capture.json();

    if (!capture.ok) {
      return NextResponse.json(
        { success: false, error: "PayPal capture failed", details: data },
        { status: 400 }
      );
    }

    // 🧠 Optionally save to DB using user info (user.userName, user.email, etc.)
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error("PayPal error:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
