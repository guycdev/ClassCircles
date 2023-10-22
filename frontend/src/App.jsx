import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import AuthLayout from "./layouts/AuthLayout";
import LogIn from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route
        path="/log-in"
        element={
          <AuthLayout>
            <LogIn />
          </AuthLayout>
        }
      />
      <Route
        path="/sign-up"
        element={
          <AuthLayout>
            <SignUp />
          </AuthLayout>
        }
      />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={route} />;
}
