"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { User } from "firebase/auth";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { UserCircle } from "lucide-react";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.reload(); // or router.refresh()
  };

  return (
    <header className="flex items-center justify-between px-6 py-10 bg-blue-700 shadow-sm sticky top-0 z-10">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-2xl font-bold text-white cursor-pointer">
          Booking Group<span className="text-blue-950 ml-1">.</span>
          <span className="text-white text-xl font-bold ml-1">com</span>
        </h1>
      </Link>

      {/* Right-side nav */}
      <nav className="flex items-center space-x-6 text-sm text-white">
        <button className="hover:text-blue-300">EN</button>
        <button className="hover:text-blue-300">USD</button>

        {!user ? (
          <>
            <Link href="/login" className="hover:text-blue-300">
              Sign In
            </Link>
            <Link href="/register" className="hover:text-blue-300">
              Register
            </Link>
          </>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 hover:text-blue-300">
              <UserCircle className="w-6 h-6" />
              <span className="hidden sm:inline">{user.email}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black mt-2">
              <DropdownMenuItem>My Bookings</DropdownMenuItem>
              <DropdownMenuItem>Account</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </nav>
    </header>
  );
}
