// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link href="/" className="text-blue-600 underline">
        Go back to Home
      </Link>
    </div>
  );
}
