"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {useAuth} from "@/app/hooks/useAuth";


export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-700">
        Welcdadadasdadasdasdasdasdasdadadome {user?.email || "Guest"} 🏡
      </h1>
    </div>
  );
}
