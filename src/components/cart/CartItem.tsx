"use client";

import { ItemType, removeFromCart } from "@/store/clientSlices/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import Image from "next/image";
import React from "react";
import { Trash2 } from "lucide-react";

export default function CartItem({ item }: { item: ItemType }) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col  bg-gray-100 sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 relative shrink-0">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-medium">{item.title}</h3>
          <p className="text-sm text-gray-500">Category: {item.category}</p>
          <p className="text-blue-600 font-semibold mt-1">${item.price}</p>
        </div>
      </div>
      <div className="ml-auto">
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500 hover:text-red-700 transition-colors"
          aria-label="Remove from cart"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
