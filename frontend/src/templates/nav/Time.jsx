import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import AnimateText from "../../components/AnimatedText";
import sun from "../../assets/misc/sun.svg";
import styles from "./Nav.module.css";

export default function Time() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
  });
  return (
    <div className={`d-flex align-items-center ${styles.timeContainer}`}>
      <p>
        <AnimateText content={time} />
      </p>
      <div className="svg">
        <ReactSVG src={sun} />
      </div>
    </div>
  );
}
