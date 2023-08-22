"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import Button from "./Button";
import axios from "axios";

const registerInput = [
  {
    id: 1,
    label: "Username: ",
    type: "text",
    placeholder: "Username",
    value: "",
    connector: "username",
  },
  {
    id: 2,
    label: "First Name: ",
    type: "text",
    placeholder: "First Name",
    value: "",
    connector: "firstName",
  },
  {
    id: 3,
    label: "Last Name: ",
    type: "text",
    placeholder: "Last Name",
    value: "",
    connector: "lastName",
  },
  {
    id: 4,
    label: "Email Address: ",
    type: "text",
    placeholder: "Email Address",
    value: "",
    connector: "email",
  },
  {
    id: 5,
    label: "Date of Birth: ",
    type: "date",
    placeholder: "Date of Birth",
    value: "",
    connector: "dob",
  },
  {
    id: 6,
    label: "Password: ",
    type: "password",
    placeholder: "Password",
    value: "",
    connector: "password",
  },
];

interface FormData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  password: string;
}

const initialFormData: FormData = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  dob: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Form data:", formData);

    const newData = {
      fname: formData.firstName,
      lname: formData.lastName,
      password: formData.password,
      email: formData.email,
      userName: formData.username,
    };

    axios
      .post("http://localhost:8080/users/create", newData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(
          response.status === 200
            ? "User Created"
            : "User Creation Unsuccessful"
        );
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
      });

    console.log("hello");
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Register Page</h2>
          {registerInput.map((input) => (
            <div key={input.id} className="mb-4">
              <Input
                label={input.label}
                placeholder={input.placeholder}
                type={input.type}
                value={formData[input.value]}
                onChange={(value) => handleInputChange(input.connector, value)}
              />
            </div>
          ))}
          <Button children="Register" />
        </div>
      </div>
    </form>
  );
};

export default Register;
