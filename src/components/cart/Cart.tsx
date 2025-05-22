"use client";

import { useAppSelector } from "@/store/hooks";
import CartItem from "@/components/cart/CartItem";
import { redirect } from "next/navigation";

export default function Cart({ token }: { token: string | undefined }) {
  const cart = useAppSelector((state) => state.cart.cart);
  const totalItems = cart.length;
  const totalPrice = cart.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  if (totalItems === 0) {
    return (
      <p className="text-center text-gray-500 mt-10 text-xl">
        Your cart is empty.
      </p>
    );
  }

  function handleCheckout() {
    if (!token) {
      redirect("/login"); // Redirect if not logged in
    }
    console.log("checkout seccuss");
  }
  return (
    <div className="max-w-5xl mx-auto px-4 pt-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-6 mb-10">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold mb-2">Cart Summary</h3>
        <p className="text-gray-700 mb-1">Total Courses: {totalItems}</p>
        <p className="text-gray-700 font-medium text-lg">
          Total Price: ${totalPrice.toFixed(2)}
        </p>

        {!token && (
          <>
            <p className="text-red-500 font-bold text-xl">
              To proceed to checkout, you must register and log in first.
            </p>
            <button
              onClick={handleCheckout}
              className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-[#222] cursor-pointer transition"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
