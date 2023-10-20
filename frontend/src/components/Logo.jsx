import React from "react";
import { ReactSVG } from "react-svg";
import logo from "../assets/logo/grad.svg";
import AnimatedText from "./AnimatedText";
import styles from "./Components.module.css";

export default function Logo() {
  return (
    <div className={`d-flex ${styles.logo}`}>
      <div className="svg">
        <ReactSVG src={logo} />
      </div>
      <h4 className={` ${styles.logoHeading}`}>
        <AnimatedText content="StudySpheres" />
      </h4>
    </div>
  );
}
