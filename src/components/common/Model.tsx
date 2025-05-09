import React from "react";

type ModelType = {
  children: React.ReactNode;
  setShowModel: (show: boolean) => void;
};

export default function Model({ setShowModel, children }: ModelType) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 ">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/75 "
        onClick={() => setShowModel(false)}
      ></div>
      <div className="relative bg-white text-black  w-[330px] sm:w-[480px] md:w-[600px] lg:w-[800px]  shadow-lg z-50 max-h-[500px] overflow-y-scroll rounded ">
        {children}
      </div>
    </div>
  );
}
