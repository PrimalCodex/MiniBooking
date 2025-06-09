"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword, } from "firebase/auth";
import {auth, signInWithGoogle} from "@/lib/firebase";
import { useRouter } from "next/navigation";



export default function LoginForm() {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // For simplicity, treat emailOrPhone as email here
      const userCredential = await signInWithEmailAndPassword(auth, emailOrPhone, password);
      console.log("User logged in:", userCredential.user);
      router.push("/home");
      // TODO: Redirect user or update global auth state
    } catch (err: any) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      console.log("Google user:", user);
      router.push("/home"); // preusmjeravanje
    } catch (err: any) {
      alert("Google sign-in failed: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto p-8 rounded-lg bg-white shadow-md space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-blue-700">Sign in</h1>

        {error && (
          <div className="text-red-600 text-center font-semibold">{error}</div>
        )}

        <div>
          <Label htmlFor="emailOrPhone" className="block mb-1 font-medium text-gray-700">
            Email or phone number
          </Label>
          <Input
            className="focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
            id="emailOrPhone"
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            placeholder="Email or phone"
            required
          />
        </div>

        <div>
          <Label htmlFor="password" className="block mb-1 font-medium text-gray-700">
            Password
          </Label>
          <Input
            className="focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        <div className="flex justify-end">
          <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800">
          Sign in
        </Button>

        <div className="flex items-center justify-center space-x-2 text-gray-500">
          <span className="h-px w-12 bg-gray-300"></span>
          <span>or</span>
          <span className="h-px w-12 bg-gray-300"></span>
        </div>

        <Button
          variant="outline"
          className="flex items-center justify-center w-full space-x-2 border-gray-300 text-gray-700 hover:bg-gray-100"
          onClick={handleGoogleSignIn}
          type="button"
        >
          <FcGoogle size={20} />
          <span>Sign in with Google</span>
        </Button>

        <div className="text-center text-sm text-gray-600">
          Don&#39;t have an account?{" "}
          <Link href="/register" className="text-blue-700 hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
