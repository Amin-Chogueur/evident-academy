"use client";

import { Users, BookOpen, Calendar } from "lucide-react";

type DashboardSummaryProps = {
  userCount: number;
  courseCount: number;
  conferenceCount: number;
};

export default function DashboardSummary({
  userCount,
  courseCount,
  conferenceCount,
}: DashboardSummaryProps) {
  const cards = [
    {
      title: "Users",
      count: userCount,
      icon: <Users className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-100",
    },
    {
      title: "Courses",
      count: courseCount,
      icon: <BookOpen className="w-6 h-6 text-green-600" />,
      color: "bg-green-100",
    },
    {
      title: "Conferences",
      count: conferenceCount,
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`p-6 rounded-2xl shadow-sm ${card.color} flex items-center justify-between`}
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              {card.title}
            </h3>
            <p className="text-3xl font-bold mt-2">{card.count}</p>
          </div>
          <div className="ml-4">{card.icon}</div>
        </div>
      ))}
    </div>
  );
}
