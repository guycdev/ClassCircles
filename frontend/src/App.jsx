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
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome, {
  loader as dashboardHomeLoader,
} from "./pages/Dash/Home/DashboardHome";
import Education, {
  loader as educationLoader,
} from "./pages/Dash/Education/Education";
import Recreation, {
  loader as recreationLoader,
} from "./pages/Dash/Recreational/Reacration";
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
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route
          index
          element={<DashboardHome />}
          // loader={dashboardHomeLoader}
        />
        <Route
          path="education"
          element={<Education />}
          // loader={educationLoader}
        />
        <Route
          path="Recreation"
          element={<Recreation />}
          // loader={recreationLoader}
        />
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={route} />;
}
