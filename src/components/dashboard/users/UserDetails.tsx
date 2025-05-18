import { UserType } from "./UserItem";
export default function UserDetails({ user }: { user: UserType }) {
  return (
    <div className=" rounded-2xl shadow-md p-3  hover:shadow-lg transition-all text-white">
      <h2 className="text-xl font-semibold  mb-3 text-center">
        {user.fullName}
      </h2>
      <p className="  mb-2">
        <span className="font-bold">Email:</span> {user.email}
      </p>
      <p className="  mb-2">
        <span className="font-bold">Mobile:</span> {user.mobile}
      </p>
      <p className="  mb-2">
        <span className="font-bold">Clinic:</span> {user.clinic}
      </p>
      <p className="  mb-2">
        <span className="font-bold">Location:</span> {user.city}, {user.country}
      </p>
      <p className="  mb-2">
        <span className="font-bold">Service:</span> {user.service}
      </p>
      <p className="text-xs mt-4">
        Register on: {new Date(user.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
