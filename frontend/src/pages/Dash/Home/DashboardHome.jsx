import React from "react";
import styles from "./DashboardHome.module.css";
import HeroImage from "../../home/Hero/HeroImage";
import sports from "../../../assets/dash/sports.jpg";
import education from "../../../assets/dash/education.png";
import hobbies from "../../../assets/dash/hobbie.jpg";

export default function DashboardHome() {
  return (
    <div className="col-8 container d-flex flex-column justify-content-between m-0">
      <div className="row gap-1">
        <div
          className={`col-12 d-flex justify-content-between ${styles.cards}`}
        >
          <HeroImage
            img={sports}
            heading="Athletic Groups"
            buttonText="Explore"
            text="Find your people today!"
          />
          <HeroImage
            img={education}
            heading="Educational Groups"
            buttonText="Explore"
            text="Find your people today!"
          />
          <HeroImage
            img={hobbies}
            heading="Hobbiest Groups"
            buttonText="Explore"
            text="Find your people today!"
          />
        </div>
      </div>
      <div className="row card">
        <div className="col-12"></div>
      </div>
    </div>
  );
}
