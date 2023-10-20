import React from "react";
import styles from "./Components.module.css";

export default function BackgroundCircles() {
  const elementArr = [];

  for (let i = 0; i < 8; i++) {
    elementArr.push(
      <div
        className={styles.backgroundCircle}
        style={{
          width: 30 * i,
          height: 30 * i,
        }}
      ></div>
    );
  }

  return <>{elementArr}</>;
}
