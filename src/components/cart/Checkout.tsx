"use client";

import { useAppSelector } from "@/store/hooks";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import axios from "axios";
const base_Uri = process.env.NEXT_PUBLIC_BASE_URL;

export default function Checkout() {
  const cart = useAppSelector((state) => state.cart.cart);
  const [paid, setPaid] = useState(false);

  const totalPrice = cart.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );
  const stringTotalPrice = totalPrice.toFixed(2);

  if (totalPrice === 0) return <></>;

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
            createOrder={(data, actions) => {
              return actions.order.create({
                intent: "CAPTURE", // ✅ REQUIRED,
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD", // or "EUR", "GBP", etc.
                      value: stringTotalPrice,
                    },
                  },
                ],
              });
            }}
            onApprove={async (data) => {
              try {
                const res = await axios.post(
                  `${base_Uri}/api/paypal/checkout`,
                  {
                    orderID: data.orderID,
                  }
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
