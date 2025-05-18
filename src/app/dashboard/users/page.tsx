"use client";
import Spinner from "@/components/common/Spinner";
import UserCardList from "@/components/dashboard/users/UserCardList";
import { fetchUsers } from "@/store/dashboardSlices/userSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useEffect, useState } from "react";

export default function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  // Filter out specific email
  console.log(users);
  const realUsers = users.filter((user) => user.role !== "admin");
  console.log(realUsers);
  // Apply search and filter
  const filteredUsers = realUsers.filter((user) => {
    const matchesSearch =
      !search ||
      user.fullName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || user.service.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    dispatch(fetchUsers()).finally(() => {
      setLoading(false); // <- update loading once done
    });
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">All Users</h1>

      {/* Responsive search and filter controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for user..."
          className="w-full sm:w-1/2 bg-white px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="Hands-on Dental Courses">Hands-on</option>
          <option value="Online Dental Courses">Online-course</option>
          <option value="Join the Academy Club">Club-member</option>
        </select>
      </div>

      {loading ? (
        <Spinner />
      ) : filteredUsers.length > 0 ? (
        <UserCardList users={filteredUsers} />
      ) : (
        <p className="text-black text-xl text-center mt-10">No users found</p>
      )}
    </div>
  );
}
