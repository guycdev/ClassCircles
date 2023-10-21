import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../templates/dash/DashboardNav";

export default function DashboardLayout() {
  return (
    <section className="container my-3 p-0">
      <div className="row justify-content-center flex-xl-row flex-column gap-4 gap-xl-0">
        <DashboardNav />
        <Outlet />
      </div>
    </section>
  );
}
