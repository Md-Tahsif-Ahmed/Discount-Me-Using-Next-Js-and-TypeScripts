'use client'
import { useState } from "react";
import go from "@/public/image/go.png";
import Image from "next/image";

const CreateAccountForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-center text-2xl font-bold mb-6">Create Account</h2>
        <form className="space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>
          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              👁️
            </button>
          </div>
          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              👁️
            </button>
          </div>
          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-gray-600 text-sm">
              Accept all terms & Conditions
            </label>
          </div>
          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-3 rounded-md hover:bg-orange-600 transition"
          >
            Create Account
          </button>
          {/* Continue with Google */}
          <button
            type="button"
            className="w-full flex items-center justify-center border border-gray-300 rounded-md py-3 mt-2 hover:bg-gray-100 transition"
          >
            <Image
              src={go}
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountForm;
