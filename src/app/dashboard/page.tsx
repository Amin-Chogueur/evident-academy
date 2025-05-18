import React from "react";
import DashboardSummary from "@/components/dashboard/DashboardSummary";
export default function Dashboard() {
  const users = 120;
  const courses = 18;
  const conferences = 5;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <DashboardSummary
        userCount={users}
        courseCount={courses}
        conferenceCount={conferences}
      />
    </div>
  );
}
