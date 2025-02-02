"use client";

import { useState } from "react";
import Header2 from "@/components/header2";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(""); // New state for userId
  const [emailAddress, setEmailAddress] = useState(""); // New state for email address
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !userId || !emailAddress) {
      setError("All fields are required.");
      return;
    }

    setError(""); // Clear errors
    console.log("User ID:", userId);
    console.log("Email Address:", emailAddress);
    console.log("Email:", email);
    console.log("Password:", password);

    // You can add API call logic here
  };

  return (
    <div>
      {/* Add Header2 */}
      <Header2 />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Login to your account to continue
          </p>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* User ID Input */}
            <div className="mb-4">
              <label
                htmlFor="userId"
                className="block text-sm font-medium text-gray-700"
              >
                User ID
              </label>
              <input
                type="text"
                id="userId"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your user ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>

            {/* Email Address Input */}
            <div className="mb-4">
              <label
                htmlFor="emailAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="/signup" // This will link to the signup page
                className="text-blue-500 font-medium hover:underline"
              >
                Sign up
              </a>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Forgot your password?{" "}
              <a
                href="/reset-password"
                className="text-blue-500 font-medium hover:underline"
              >
                Reset Password
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}