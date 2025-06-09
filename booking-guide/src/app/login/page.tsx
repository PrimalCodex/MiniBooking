"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc"; // react-icons Google icon

export default function LoginForm() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in", { emailOrPhone, password });
    // TODO: Your login logic here
  };

  const handleGoogleSignIn = () => {
    // TODO: Implement Google Sign-In (Firebase, OAuth, etc)
    console.log("Sign in with Google");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto p-8 rounded-lg bg-white shadow-md space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-blue-700">Sign in</h1>

        <div>
          <Label htmlFor="emailOrPhone" className="block mb-1 font-medium text-gray-700">
            Email or phone number
          </Label>
          <Input
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
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        {/* Forgot password link */}
        <div className="flex justify-end">
          <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800">
          Sign in
        </Button>

        {/* Or separator */}
        <div className="flex items-center justify-center space-x-2 text-gray-500">
          <span className="h-px w-12 bg-gray-300"></span>
          <span>or</span>
          <span className="h-px w-12 bg-gray-300"></span>
        </div>

        {/* Google Sign-in button */}
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
