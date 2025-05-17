import React from "react";
import UserItem from "./UserItem";

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

type Props = {
  users: UserType[];
};

export default function UserCardList({ users }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => {
        if (user.email === "chogueuramine@gmail.com") {
          return;
        } else {
          return <UserItem user={user} key={user.email} />;
        }
      })}
    </div>
  );
}
