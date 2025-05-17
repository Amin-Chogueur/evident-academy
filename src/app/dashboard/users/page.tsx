"use client";
import UserCardList from "@/components/dashboard/users/UserCardList";
import { fetchUsers } from "@/store/dashboardSlices/userSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import React, { useEffect } from "react";

export default function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">All Users</h1>
      <UserCardList users={users} />
    </div>
  );
}
