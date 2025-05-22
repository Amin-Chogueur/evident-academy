// app/api/paypal/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";

// 🚨 These must NOT be exported to the client
const PAYPAL_API = process.env.PAYPAL_API ?? "https://api-m.sandbox.paypal.com";
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID!;
const PAYPAL_SECRET_KEY = process.env.PAYPAL_SECRET_KEY!;

if (!PAYPAL_CLIENT_ID || !PAYPAL_SECRET_KEY) {
  throw new Error("Missing PayPal credentials in environment");
}

async function getAccessToken() {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET_KEY}`).toString(
    "base64"
  );
  const resp = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!resp.ok) {
    const err = await resp.text();
    console.error("PayPal OAuth error:", err);
    throw new Error("Failed to authenticate with PayPal");
  }

  const { access_token } = await resp.json();
  return access_token as string;
}

export async function POST(req: NextRequest) {
  let orderID: string;
  try {
    const body = await req.json();
    orderID = body.orderID;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!orderID) {
    return NextResponse.json({ error: "Missing orderID" }, { status: 400 });
  }

  try {
    const token = await getAccessToken();

    const captureRes = await fetch(
      `${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await captureRes.json();

    if (!captureRes.ok) {
      // e.g. semantically incorrect, invalid orderID, etc.
      console.error("PayPal capture error:", data);
      return NextResponse.json(
        { error: "Capture failed", details: data },
        { status: 400 }
      );
    }

    // ✅ Success! return the full order capture details
    return NextResponse.json({ success: true, order: data }, { status: 200 });
  } catch (err) {
    console.error("Internal PayPal route error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
