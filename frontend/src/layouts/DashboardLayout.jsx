import React from "react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
      <h1>i am the nav</h1>
      <Outlet />
    </>
  );
}
