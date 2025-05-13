"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type ContentType = {
  content: {
    id: number;
    question: string;
    answer: {
      text: string;
    }[];
  }[];
  isOpen?: boolean;
};

export default function Accordion({ content, isOpen }: ContentType) {
  const [current, setCurrent] = useState<number | null>(null);
  const [show, setShow] = useState(isOpen || false);
  return (
    <div className="space-y-6 max-w-4xl mx-auto text-lg mt-10 bg-gray-200 p-4 md:p-10 rounded-2xl">
      <h2 className="text-[28px] font-bold text-center ">
        Frequently Asked Questions{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => setShow(true)}
        >
          (FAQs)
        </span>
      </h2>
      {show && (
        <div>
          {content.map((item) => (
            <div key={item.id} className="bg-gray-100 p-2 md:p-4 rounded my-3">
              <div className="flex justify-between items-center p-2 md:p-4">
                <h3 className="text-[16px] font-semibold ">
                  {item.id}. {item.question}
                </h3>
                <span
                  className="cursor-pointer"
                  onClick={() => setCurrent(item.id)}
                >
                  <ChevronDown />
                </span>
              </div>

              {current === item.id && (
                <ul className="p-2 md:px-4 list-disc ml-8">
                  {item.answer.map((content, i) => {
                    const isNumbered = /^\d\//.test(content.text); // matches "1/", "2/", etc.
                    return isNumbered ? (
                      <span key={i} className="font-semibold">
                        {content.text}
                      </span>
                    ) : (
                      <li key={i}>{content.text}</li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
