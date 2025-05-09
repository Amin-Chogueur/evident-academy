import Image from "next/image";

type CardType = {
  title: string;
  imageUrl: string;
  description: string;
  onShowModel: (show: boolean) => void;
};

export default function Card({
  title,
  imageUrl,
  description,
  onShowModel,
}: CardType) {
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
        <h2 className="text-[28px] font-bold  text-center text-blue-600">
          {title}
        </h2>
        <p className="text-[16px] text-center ">{description}</p>
        <button
          onClick={() => onShowModel(true)}
          className="bg-blue-600 block w-fit mx-auto md:ml-auto  hover:bg-blue-700 cursor-pointer p-2 rounded-2xl text-white text-[24px] md:text-[28px] font-bold"
        >
          More Info
        </button>
      </div>
    </div>
  );
}
