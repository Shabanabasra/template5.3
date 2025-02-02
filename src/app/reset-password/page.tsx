"use client";

import { useState } from "react";
import Header2 from "@/components/header2"; // Import the Header2 component

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required.");
      return;
    }

    setError(""); // Clear error
    setSuccessMessage(
      "If this email exists in our system, you will receive a reset link shortly."
    );

    console.log("Password reset email sent to:", email);

    // Add API call logic here to handle password reset
  };

  return (
    <div>
      {/* Add Header2 */}
      <Header2 />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Reset Password
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center text-sm">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center text-sm">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
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

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/login"
              className="text-blue-500 font-medium hover:underline"
            >
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}