// app/api/paypal/create-order/route.ts

import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { connectDb } from "@/lib/mongoDb/connectDb";
import User from "@/lib/mongoDb/models/userModel";

const PAYPAL_API = process.env.PAYPAL_API ?? "https://api-m.sandbox.paypal.com";
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID!;
const PAYPAL_SECRET_KEY = process.env.PAYPAL_SECRET_KEY!;

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

  const json = await res.json();
  return json.access_token;
}

export async function POST(req: NextRequest) {
  try {
    // 🔐 Authenticate the user
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // const decoded = jwt.verify(token, process.env.TOKEN_SECRET!);
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET!);

    if (typeof decoded === "string" || !("userName" in decoded)) {
      return NextResponse.json(
        { message: "Invalid token payload" },
        { status: 401 }
      );
    }

    const userEmail = (decoded as JwtPayload).userEmail;
    await connectDb();
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    const { total, description } = await req.json();

    const accessToken = await getAccessToken();

    const orderRes = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: total,
            },
            description,
          },
        ],
        application_context: {
          return_url: "https://your-site.com/success",
          cancel_url: "https://your-site.com/cancel",
        },
      }),
    });

    const data = await orderRes.json();

    if (!orderRes.ok) {
      return NextResponse.json(
        { error: "Failed to create PayPal order", details: data },
        { status: 400 }
      );
    }

    return NextResponse.json({ orderID: data.id });
  } catch (err) {
    console.error("PayPal Create Order Error:", err);
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  }
}
