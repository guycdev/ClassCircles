import React from "react";
import DashboardCards from "./DashboardCards";
import DashboardTeams from "./DashboardTeams";
import styles from "./DashboardHome.module.css";
import { motion } from "framer-motion";
import { useLoaderData, redirect } from "react-router-dom";

export async function loader() {
  try {
    const userRequest = await fetch("http://127.0.0.1:5173/api/user?id=123");
    const userData = await userRequest.json();
    const groupRequest = await fetch("http://127.0.0.1:5173/api/user?id=123");
    const groupData = await groupRequest.json();
    if (!userRequest.ok || !groupRequest.ok) {
      return redirect("../account");
    }
    return { userData, groupData };
  } catch (err) {
    console.log(err);
  }
}

export default function DashboardHome() {
  const data = useLoaderData();

  console.log(data);

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
