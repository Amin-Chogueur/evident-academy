import Image from "next/image";
import Link from "next/link";
import React from "react";
type CategoryType = {
  imageUrl: string;
  title: string;
  link: string;
};
export default function Category({ imageUrl, title, link }: CategoryType) {
  return (
    <div className="bg-gray-300 rounded-xl overflow-hidden w-fit mx-auto">
      <Link href={link}>
        <Image
          src={imageUrl}
          alt="pic"
          width={320}
          height={200}
          className="transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-x-2"
        />
        <h2 className="text-center text-[22px] font-bold p-3 hover:text-blue-600 ">
          {title}
        </h2>
      </Link>
    </div>
  );
}
