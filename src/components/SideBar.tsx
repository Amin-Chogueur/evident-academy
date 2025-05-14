// components/Sidebar.tsx
import { FaUser, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="h-screen w-20 md:w-64 bg-black text-white flex flex-col transition-all duration-300">
      <div className="flex flex-col items-center md:items-start gap-4 p-4">
        <Link
          href="/dashboard/users"
          className="flex items-center gap-4 hover:bg-gray-700 p-2 rounded w-full"
        >
          <FaUser className="text-xl" />
          <span className="hidden md:inline">Users</span>
        </Link>
        <Link
          href="/dashboard/courses"
          className="flex items-center gap-4 hover:bg-gray-700 p-2 rounded w-full"
        >
          <FaBook className="text-xl" />
          <span className="hidden md:inline">Courses</span>
        </Link>
        <Link
          href="/dashboard/conferences"
          className="flex items-center gap-4 hover:bg-gray-700 p-2 rounded w-full"
        >
          <FaChalkboardTeacher className="text-xl" />
          <span className="hidden md:inline">Conferences</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
