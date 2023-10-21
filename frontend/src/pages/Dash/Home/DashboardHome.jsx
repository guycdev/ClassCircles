import React from "react";
import DashboardCards from "./DashboardCards";
import DashboardTeams from "./DashboardTeams";
import styles from "./DashboardHome.module.css";
import { motion } from "framer-motion";

export default function DashboardHome() {
  return (
    <div
      className={`col-xl-9 col-12 container d-flex flex-column justify-content-between m-0 ${styles.scrollbar}`}
    >
      <div className="row gap-1 mb-3  justify-content-center">
        <DashboardCards />
      </div>
      <motion.div
        className="row mt-3 "
        initial={{
          y: 1500,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
          },
        }}
      >
        <DashboardTeams />
      </motion.div>
    </div>
  );
}
