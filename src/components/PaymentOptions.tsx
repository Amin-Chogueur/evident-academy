import Link from "next/link";
import React from "react";
import { FaCreditCard, FaPaypal, FaUniversity } from "react-icons/fa";
import { MdCreditCard } from "react-icons/md";

const PaymentOptions = () => {
  const options = [
    {
      name: "Carte EDAHABIA",
      icon: <MdCreditCard className="text-yellow-600 text-2xl" />,
      href: "https://www.poste.dz/carte-edahabia", // Example link
    },
    {
      name: "Credit Cards",
      icon: <FaCreditCard className="text-blue-600 text-2xl" />,
      href: "https://www.visa.com/",
    },
    {
      name: "PayPal",
      icon: <FaPaypal className="text-indigo-600 text-2xl" />,
      href: "https://www.paypal.com/",
    },
    {
      name: "Bank Transfers",
      icon: <FaUniversity className="text-green-600 text-2xl" />,
      href: "/", // Replace with actual bank link or instructions page
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">We accept:</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option, index) => (
          <li key={index}>
            <Link
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 border border-gray-200 rounded hover:bg-gray-50 transition"
            >
              {option.icon}
              <span className="font-medium">{option.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentOptions;
