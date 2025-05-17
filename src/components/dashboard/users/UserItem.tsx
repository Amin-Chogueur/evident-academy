import React from "react";

type UserType = {
  fullName: string;
  email: string;
  mobile: string;
  clinic: string;
  country: string;
  city: string;
  service: string;
  createdAt: string;
};

export default function UserItem({ user }: { user: UserType }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {user.fullName}
      </h2>
      <p className="text-sm text-gray-500 mb-1">
        <span className="font-medium">Email:</span> {user.email}
      </p>
      <p className="text-sm text-gray-500 mb-1">
        <span className="font-medium">Mobile:</span> {user.mobile}
      </p>
      <p className="text-sm text-gray-500 mb-1">
        <span className="font-medium">Clinic:</span> {user.clinic}
      </p>
      <p className="text-sm text-gray-500 mb-1">
        <span className="font-medium">Location:</span> {user.city},{" "}
        {user.country}
      </p>
      <p className="text-sm text-gray-500 mb-1">
        <span className="font-medium">Service:</span> {user.service}
      </p>
      <p className="text-xs text-gray-400 mt-4">
        Register on: {new Date(user.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
