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

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={route} />;
}
