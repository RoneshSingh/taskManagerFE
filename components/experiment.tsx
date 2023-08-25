"use client";

import Link from "next/link";

const LoginSignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 max-w-md mx-auto backdrop-blur-2.5 -webkit-backdrop-blur-2.5 border-1 mb-6 ml-6 mr-1.5 mt-6 h-[500px] border rounded-3xl border-[rgba(255,255,255,0.18)] bg-gradient-to-br transform from-pink-300 to-indigo-500 bg-opacity-20 pt-7 shadow-md transition-transform duration-300 hover:scale-105 opacity-70">
        <h1 className="text-3xl font-semibold mb-6">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full transform rounded p-2 hover:scale-105"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
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
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full bg-purple-500 text-white py-2 rounded font-semibold hover:bg-purple-600 transform transition duration-300 hover:scale-110"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            className="text-purple-700 trasnform hover:underline scale-110"
            href="/experii"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupPage;
