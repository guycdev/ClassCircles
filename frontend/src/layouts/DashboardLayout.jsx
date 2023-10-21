import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../templates/dash/DashboardNav";

export default function DashboardLayout() {
  return (
    <section className="container my-5 p-0">
      <div className="row gap-1">
        <div className="col-3">
          <DashboardNav />
        </div>
        <Outlet />
      </div>
    </section>
  );
}
