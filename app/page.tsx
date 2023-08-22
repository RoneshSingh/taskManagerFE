import React from "react";

import Login from "@/components/Login";
import Register from "@/components/Register";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Task Manager</h1>

        <div className="flex justify-center gap-4">
          <div>
            <Login />
          </div>

          <div>
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}
