"use client";
import { addToCart } from "@/store/clientSlices/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import Image from "next/image";

type CardType = {
  title: string;
  imageUrl: string;
  description: string;
  mode: string;
  level: string;
  language: string;
  price: string;
  id: string;
  category: string;
  onShowModel: (show: boolean) => void;
};

export default function Card({
  title,
  imageUrl,
  description,
  mode,
  level,
  language,
  price,
  id,
  category,
  onShowModel,
}: CardType) {
  const dispatch = useAppDispatch();
  const course = { title, price, id, imageUrl, category };

  return (
    <div className="flex flex-col gap-5 lg:flex-row justify-between mb-10 bg-gray-200 p-6 lg:p-6 rounded-2xl">
      <div className="flex-1">
        <Image
          src={imageUrl}
          alt="Course Image 1"
          width={350}
          height={300}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
      <div className="flex flex-col gap-5 flex-1">
        <h2 className="text-[28px] font-bold  text-center ">{title}</h2>
        <p className="text-[16px] text-center ">{description}</p>
        <ul className="list-disc p-5">
          <li>
            <span className="font-bold">Language : </span> {language}
          </li>
          <li>
            <span className="font-bold">Mode: {mode}</span>
          </li>
          <li>
            <span className="font-bold">Level : </span>
            {level}
          </li>
          <li>
            <span className="font-bold">Price : </span>
            {price}
          </li>
        </ul>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => onShowModel(true)}
            className="bg-black block w-fit mx-auto md:ml-auto hover:bg-[#222]  cursor-pointer p-2 rounded-2xl text-white text-[24px] md:text-[28px] font-bold"
          >
            More Info
          </button>
          <button
            className="bg-white  border block w-fit mx-auto md:ml-auto hover:bg-black hover:text-white cursor-pointer p-2 rounded-2xl text-black text-[24px] md:text-[28px] font-bold"
            onClick={() => dispatch(addToCart(course))}
          >
            Book your course
          </button>
        </div>
      </div>
    </div>
  );
}
