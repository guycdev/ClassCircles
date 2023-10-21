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

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="join" element={<h1>Join group</h1>} />
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={route} />;
}
