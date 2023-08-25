import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//http://localhost:3001/users/login

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { username: string; password: string }) => {
        return {
          url: "/users/login",
          method: "POST",
          body,
        };
      },
    }),
    registerUser: builder.mutation({
      query: (body: {
        username: string;
        firstname: string;
        lastname: string;
        email: string;
        password: string;
      }) => {
        return {
          url: "/users/create",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/tasks",
    prepareHeaders: (headers) => {
      // headers.append("Authorization", "Bearer YourAccessToken");
      // headers.append("CustomHeader", "HeaderValue");
      headers.set("AccessControlAllowOrigin", "*");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    taskCreate: builder.mutation({
      query: (body: {
        taskTitle: string;
        taskDesc: string;
        taskDate: string;
        taskDueDate: string;
        userName: string;
      }) => {
        return {
          url: `/${body.userName}/create`,
          method: "POST",
          body,
        };
      },
    }),
    getTaskByID: builder.query({
      query: (taskID: string) => {
        return {
          url: `${taskID}`,
          method: "GET",
        };
      },
    }),
    getTaskByUsername: builder.query({
      query: (userName: string) => {
        return {
          url: `user/${userName}`,
          method: "GET",
        };
      },
    }),
    deleteTaskByID: builder.mutation({
      query: (taskID: string) => {
        return {
          url: `${taskID}/delete`,
          method: "DELETE",
        };
      },
    }),
    updateTask: builder.mutation({
      query: (body: {
        taskTitle: string;
        taskDesc: string;
        taskDate: string;
        taskDueDate: string;
        userName: string;
      }) => {
        return {
          url: `/${body.userName}/update`,
          method: "PUT",
          body,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
export const {
  useTaskCreateMutation,
  useGetTaskByIDQuery,
  useUpdateTaskMutation,
  useDeleteTaskByIDMutation,
  useGetTaskByUsernameQuery,
} = taskApi;
