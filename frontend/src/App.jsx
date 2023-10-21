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
import DashboardHome from "./pages/Dash/Home/DashboardHome";
import Education from "./pages/Dash/Education/Education";
import Recreation from "./pages/Dash/Recreational/Reacration";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="education" element={<Education />} />
        <Route path="Recreation" element={<Recreation />} />
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={route} />;
}
