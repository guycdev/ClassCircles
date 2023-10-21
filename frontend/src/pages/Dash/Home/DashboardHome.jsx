import React from "react";
import DashboardCards from "./DashboardCards";
import DashboardTeams from "./DashboardTeams";
import styles from "./DashboardHome.module.css";

export default function DashboardHome() {
  return (
    <div
      className={`col-9 container d-flex flex-column justify-content-between m-0 ${styles.scrollbar}`}
    >
      <div className="row gap-1 mb-3">
        <DashboardCards />
      </div>
      <div className="row mt-3">
        <DashboardTeams />
      </div>
    </div>
  );
}
