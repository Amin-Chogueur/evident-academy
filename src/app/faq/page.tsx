"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
const faqs = [
  {
    id: 1,
    title: "Who can register in these courses?",
    content:
      "Our courses are open to licensed dentists, dental specialists and dental students depending on the course level. Please check individual course information.",
  },
  {
    id: 2,
    title: "Are these courses suitable for beginners?",
    content:
      "Yes! We offer beginner to advanced levels. Each course description specifies the experience level it’s best suited for.",
  },
  {
    id: 3,
    title: "What skills or topics are covered?",
    content:
      "We offer a variety of topics including endodontics, restorative dentistry/prosthodontics, pediatric dentistry, and dental surgery.",
  },
  {
    id: 4,
    title: "How will I get hands-on experience?",
    content:
      "Most courses include hands-on training using typodonts, extracted teeth, 3D tooth models, or animal head (example: sheep head).",
  },
  {
    id: 5,
    title: "What materials and instruments are provided?",
    content:
      "We provide all necessary instruments, materials, and equipment during the training sessions.",
  },
  {
    id: 6,
    title: "Do I need to bring anything with me?",
    content:
      "No special equipment is required. Just bring your notebooks/I-pads/ laptops and be ready to take notes and learn.",
  },
  {
    id: 7,
    title: "Where are the courses held?",
    content:
      "Courses are conducted all across Algeria´s biggest cities. Check each course page for location details.",
  },
  {
    id: 8,
    title: "How long is each course?",
    content:
      "Course durations range from 1-day intensives to 3-day workshops. See individual listings for full schedules.",
  },
  {
    id: 9,
    title: "Will I receive a certificate after completing the course?",
    content:
      "Yes, all participants receive a certificate of completion upon completing the course.",
  },
  {
    id: 10,
    title: "What is the refund or cancellation policy?",
    content:
      "Cancellations made 1 month prior to the course date are eligible for a full refund or course credit.",
  },
  {
    id: 11,
    title: "Do you offer group or clinic discounts?",
    content:
      "Yes, discounts are available for teams or group bookings. Contact us for a custom quote. We also offer discounts for Evident Academy club members.",
  },
  {
    id: 12,
    title: "How do I register?",
    content:
      "You can register directly through our website by selecting your desired course and completing both the registration and payment process.",
  },
];

export default function FAQ() {
  const [current, setCurrent] = useState<number | null>(null);
  return (
    <div className="space-y-6 max-w-4xl mx-auto text-lg mt-10 bg-gray-100 p-4 md:p-10 rounded-2xl">
      <h2 className="text-[28px] font-bold text-center text-blue-600">
        Frequently Asked Questions (FAQs)
      </h2>
      <div>
        {faqs.map((item) => (
          <div key={item.title} className="bg-gray-200 p-2 md:p-4 rounded my-3">
            <div className="flex justify-between items-center p-2 md:p-4">
              <h3 className="text-[16px] font-semibold ">{item.title}</h3>
              <span
                className="cursor-pointer"
                onClick={() => setCurrent(item.id)}
              >
                <ChevronDown />
              </span>
            </div>

            {current === item.id && (
              <p className=" p-2 md:px-4">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
