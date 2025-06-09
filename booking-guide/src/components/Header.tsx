"use client";

import Link from "next/link";

export default function AuthHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-700 shadow-sm sticky top-0 z-10">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-2xl font-bold text-white cursor-pointer">
          Booking Group<span className="text-blue-950 ml-1">.</span>
          <span className="text-white text-xl font-bold ml-1">com</span>
        </h1>
      </Link>

      {/* Right side (language selector placeholder + user icon or links) */}
      <nav className="flex items-center space-x-6 text-sm text-white">
        <button className="hover:text-blue-700">EN</button>
        <button className="hover:text-blue-700">USD</button>
        {/* Could add more here like user menu or help */}
        <Link href="/login" className="hover:text-blue-700">
          Sign In
        </Link>
        <Link href="/register" className="hover:text-blue-700">
          Register
        </Link>
      </nav>
    </header>
  );
}
