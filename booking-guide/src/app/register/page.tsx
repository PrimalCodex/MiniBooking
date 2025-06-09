"use client";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Link from "next/link";
import {FcGoogle} from "react-icons/fc";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Registered user:", user);

      // Optional: redirect to dashboard/homepage
      // router.push("/dashboard"); // if using next/navigation or next/router
    } catch (error: any) {
      console.error("Registration error:", error.message);
      alert(error.message)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto p-8 rounded-lg bg-white shadow-md space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-blue-700">Create your account</h1>

        <div>
          <Label htmlFor="email" className="block mb-1 font-medium text-gray-700">
            Email address
          </Label>
          <Input
            className="focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
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
            placeholder="Create a password"
            required
          />
        </div>

        <div>
          <Label htmlFor="confirmPassword" className="block mb-1 font-medium text-gray-700">
            Confirm password
          </Label>
          <Input
            className="focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            id="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-blue-700 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to the{" "}
            <Link href="/terms" className="text-blue-700 underline">Terms of Service</Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-700 underline">Privacy Policy</Link>.
          </label>
        </div>

        <Button type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800">
          Register
        </Button>
        <div className="flex items-center justify-center space-x-2 text-gray-500">
          <span className="h-px w-12 bg-gray-300"></span>
          <span>or</span>
          <span className="h-px w-12 bg-gray-300"></span>
        </div>

        {/* Google Sign-in button */}
        <Button
          variant="outline"
          className="flex items-center justify-center w-full space-x-2 border-gray-300 text-gray-700 hover:bg-gray-100"
          onClick={handleSubmit}
          type="button"
        >
          <FcGoogle size={20} />
          <span>Sign in with Google</span>
        </Button>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-700 hover:underline">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
