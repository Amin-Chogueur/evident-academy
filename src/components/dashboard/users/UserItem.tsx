import Model from "@/components/common/Model";
import React, { useState } from "react";
import UserDetails from "./UserDetails";
import { deleteUser } from "@/store/dashboardSlices/userSlice";
import { useAppDispatch } from "@/store/hooks";
export type UserType = {
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

export default function UserItem({ user }: { user: UserType }) {
  const [showModel, setShowModel] = useState(false);
  const dispatch = useAppDispatch();
  const handleDelete = (id: string) => {
    const confirm = window.confirm(
      `Are you sure you want to delet this user : ${user.fullName}`
    );
    if (confirm) {
      dispatch(deleteUser(id));
    }

    console.log("Deleting user with email:", id);
  };

  return (
    <tr className="border-t hover:bg-gray-200">
      <td className="px-6 py-4 text-sm text-gray-800">{user.fullName}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{user.service}</td>
      <td className="px-6 py-4 text-sm space-x-2 space-y-2">
        <button
          onClick={() => setShowModel(true)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition cursor-pointer"
        >
          Details
        </button>

        <button
          onClick={() => handleDelete(user._id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition cursor-pointer"
        >
          Delete
        </button>
      </td>
      {showModel && (
        <td>
          <Model setShowModel={setShowModel}>
            <UserDetails user={user} />
          </Model>
        </td>
      )}
    </tr>
  );
}
