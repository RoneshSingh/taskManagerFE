"use client";
import React, { useState } from "react";
import Button from "./Button";
import { useTaskCreateMutation } from "@/redux/authAPI";

interface Task {
  taskTitle: string;
  taskDesc: string;
  taskDate: string;
  taskDueDate: string;
  userName: string;
}

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [due, setDue] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const [createTask, { isSuccess }] = useTaskCreateMutation();

  const handleAddTask = async (event: any) => {
    event.preventDefault();

    const newData = {
      taskTitle: title,
      taskDesc: description,
      taskDate: "regular",
      taskDueDate: due,
      userName: "annishsingh",
    };

    const response = await createTask(newData);

    console.log(response);
  };

  return (
    <form onSubmit={handleAddTask}>
      <label className="block text-gray-700 text-sm font-bold mb-1">
        Title:
        <input
          className="border-violet-400 border-2 p-2 rounded w-full"
          type="text"
          placeholder="Username"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label className="block text-gray-700 text-sm font-bold mb-1">
        Description:
        <input
          className="border-violet-400 border-2 p-2 rounded w-full"
          type="text"
          placeholder=" Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <label className="block text-gray-700 text-sm font-bold mb-1">
        Due Date:
        <input
          className="border-violet-400 border-2 p-2 rounded w-full"
          type="date"
          placeholder=" Due"
          value={due}
          onChange={(e) => setDue(e.target.value)}
        />
      </label>
      <Button children="Login" />
    </form>
  );
};

export default AddTask;
