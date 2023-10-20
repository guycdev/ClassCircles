import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../templates/nav/Header";
import Footer from "../templates/footer/Footer";

export default function HomeLayout() {
  return (
    <main className="container">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
