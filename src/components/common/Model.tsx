import React from "react";
import { X } from "lucide-react";
type ModelType = {
  children: React.ReactNode;
  setShowModel: (show: boolean) => void;
};

export default function Model({ setShowModel, children }: ModelType) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/75"
        onClick={() => setShowModel(false)}
      ></div>

      <div className="relative bg-white text-black w-[330px] sm:w-[480px] md:w-[600px] lg:w-[800px] shadow-lg z-50 max-h-[500px] overflow-y-scroll rounded">
        {/* Close button positioned relative to this container */}
        <div className="sticky top-0 bg-white z-10 flex justify-end p-2">
          <span className="cursor-pointer" onClick={() => setShowModel(false)}>
            <X size={24} />
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}
