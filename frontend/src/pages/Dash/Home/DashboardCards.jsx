import React from "react";
import styles from "./DashboardHome.module.css";
import HeroImage from "../../../components/HeroImage";
import sports from "../../../assets/dash/sports.jpg";
import education from "../../../assets/dash/education.png";
import hobbies from "../../../assets/dash/hobbie.jpg";

export default function DashboardCards() {
  return (
    <div
      className={`col-7 col-lg-12 d-flex justify-content-between flex-column flex-lg-row gap-4 gap-lg-0 ${styles.cards}`}
    >
      <HeroImage
        img={sports}
        heading="Athletic Groups"
        buttonText="Explore"
        text="Find your people today!"
        id={0}
        examples={["Basketball", "Soccer", "Tennis", "Pickleball", "Yoga"]}
        to="./recreation"
      />
      <HeroImage
        img={education}
        heading="Educational Groups"
        buttonText="Explore"
        text="Find your people today!"
        id={1}
        examples={["Calculus", "Networks", "Operating Systems"]}
        to="./education"
      />
      <HeroImage
        img={hobbies}
        heading="Hobbiest Groups"
        buttonText="Explore"
        text="Find your people today!"
        id={2}
        examples={["Singing", "Poetry Slams", "Gaming"]}
        to="./recreation"
      />
    </div>
  );
}
