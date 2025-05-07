import React from "react";

export default function Cart() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <p className="text-3xl text-center my-7">course Id ...</p>

      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="https://www.paypal.com/your-link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
        >
          Pay with PayPal
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
        >
          Pay via Bank Transfer
        </a>
      </div>
    </div>
  );
}
