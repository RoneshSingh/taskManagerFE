"use client";

import React, { useState } from "react";

import Button from "@/components/Button";

import { useRouter } from "next/navigation";
import { useLoginUserMutation } from "@/redux/authAPI";

const Login = () => {
  const [loginData, { isLoading, isError }] = useLoginUserMutation();

  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: any) => {
    event.preventDefault();

    const newData = {
      username: username,
      password: password,
    };

    console.log(newData);

    try {
      const hello = await loginData({ username, password });
      console.log(hello);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label className="block text-gray-700 text-sm font-bold mb-1">
        Username:
        <input
          className="border-violet-400 border-2 p-2 rounded w-full"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <label className="block text-gray-700 text-sm font-bold mb-1">
        Password:
        <input
          className="border-violet-400 border-2 p-2 rounded w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <Button children="Login" />
    </form>
  );
};

export default Login;
