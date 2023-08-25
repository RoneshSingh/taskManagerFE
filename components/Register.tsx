"use client";

import React, { useState } from "react";

import Button from "./Button";

import { useRegisterUserMutation } from "@/redux/authAPI";

interface FormData {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerData, { isLoading, isSuccess, isError }] =
    useRegisterUserMutation();

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const hello = await registerData({
        username,
        firstname,
        lastname,
        email,
        password,
      });
      console.log(hello);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={handleRegister}>
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
        First Name:
        <input
          className="border-violet-400 border-2 p-2 rounded w-full"
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-1">
        Last Name:
        <input
          className="border-violet-400 border-2 p-2 rounded w-full"
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-1">
        Email Address:
        <input
          className="border-violet-400 border-2 p-2 rounded w-full"
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <Button children="Register" />
    </form>
  );
};

export default Register;
