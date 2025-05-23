"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import axios from "axios";

const base_Uri = process.env.NEXT_PUBLIC_BASE_URL;

export default function Checkout({
  totalPrice,
}: {
  totalPrice: string | undefined;
}) {
  const [paid, setPaid] = useState(false);
  console.log(totalPrice);

  if (totalPrice === "0.00") return null;

  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        currency: "USD",
      }}
    >
      <div className="max-w-md mx-auto mt-8">
        {paid ? (
          <p className="text-green-600 text-lg font-semibold">
            Payment successful! 🎉
          </p>
        ) : (
          <PayPalButtons
            style={{ layout: "vertical" }}
            forceReRender={[totalPrice]}
            createOrder={(data, actions) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD",
                      value: totalPrice!,
                    },
                  },
                ],
              });
            }}
            onApprove={async (data) => {
              try {
                const res = await axios.post(
                  `${base_Uri}/api/paypal/checkout`,
                  { orderID: data.orderID },
                  { withCredentials: true } // 👈 SEND cookies!
                );

                if (res.data.success) {
                  console.log("Order captured:", res.data.data);
                  setPaid(true);
                } else {
                  console.error("Payment error:", res.data.error);
                }
              } catch (err) {
                console.error("Checkout error:", err);
              }
            }}
            onError={(err) => {
              console.error("PayPal button error:", err);
            }}
          />
        )}
      </div>
    </PayPalScriptProvider>
  );
}
