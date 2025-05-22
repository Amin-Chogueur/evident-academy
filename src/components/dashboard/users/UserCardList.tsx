import React from "react";
import UserItem from "./UserItem";

type UserType = {
  _id: string;
  fullName: string;
  email: string;
  mobile: string;
  clinic: string;
  country: string;
  city: string;
  service: string;
  createdAt: string;
  role: string;
};

type Props = {
  users: UserType[];
};

export default function UserCardList({ users }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gray-100  text-left">
            <th className="px-6 py-3 text-sm font-semibold">Full Name</th>
            <th className="px-6 py-3 text-sm font-semibold">Email</th>
            <th className="px-6 py-3 text-sm font-semibold">Service</th>
            <th className="px-6 py-3 text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserItem key={user.email} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
