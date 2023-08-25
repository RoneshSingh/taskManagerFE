"use client";

import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="p-8 max-w-md mx-auto backdrop-blur-2.5 -webkit-backdrop-blur-2.5 rounded-2xl border-1 mb-6 ml-6 mr-1.5 mt-6 h-[700px] border border-[rgba(255,255,255,0.18)] bg-gradient-to-br from-pink-300 to-indigo-500 bg-opacity-20 pt-7 shadow-md transition-transform duration-300 hover: opacity-70">
        <h1 className="text-3xl font-semibold mb-6">Sign Up</h1>
        <form>
          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="w-full transform rounded p-2 hover:scale-105 "
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="w-full transform rounded p-2 hover:scale-105"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full transform rounded p-2 hover:scale-105"
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full transform rounded p-2 hover:scale-105"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full transform rounded p-2 hover:scale-105"
              type="password"
              id="password"
              name="password"
              placeholder="Choose a password"
            />
          </div>
          <button
            className="w-full bg-purple-500 text-white py-2 rounded font-semibold hover:bg-purple-600 transform transition duration-300 hover:scale-110"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-500">
          Already have an account?{" "}
          <Link
            href="/experi"
            className="text-purple-700 transform hover:underline scale-110"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
