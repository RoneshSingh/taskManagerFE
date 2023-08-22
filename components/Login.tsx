"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import axios from "axios";
import { redirect } from "next/navigation";

const loginInput = [
  {
    id: 1,
    label: "Username: ",
    type: "text",
    placeholder: "Username",
    valueChange: "",
  },
  {
    id: 2,
    label: "Password: ",
    type: "password",
    placeholder: "Password",
    valueChange: "",
  },
];

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: any) => {
    event.preventDefault();
    // You can now use the username and password values for your login logic
    console.log("Username:", username);
    console.log("Password:", password);

    const newData = {
      userName: username,
      password: password,
    };

    axios
      .post("http://localhost:8080/users/login", newData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(
          response.status === 200
            ? redirect("/taskmanager/app/dashboard")
            : "User Login Failed"
        );
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Login Page</h2>
          {loginInput.map((input) => (
            <div key={input.id} className="mb-4">
              <Input
                label={input.label}
                placeholder={input.placeholder}
                type={input.type}
                value={input.id === 1 ? username : password}
                onChange={input.id === 1 ? setUsername : setPassword}
              />
            </div>
          ))}
          <Button children="Login" onClick={() => handleLogin} />
        </div>
      </div>
    </form>
  );
};

export default Login;
