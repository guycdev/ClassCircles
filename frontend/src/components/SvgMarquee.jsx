import React from "react";
import Marquee from "react-fast-marquee";
import { ReactSVG } from "react-svg";
import styles from "./Components.module.css";

export default function SvgMarquee(props) {
  const { svgs, pause } = props;

  const elementArr = svgs.map((svg, index) => {
    return (
      <div className={styles.marqueeItem} key={index}>
        <ReactSVG src={svg} />
      </div>
    );
  });

  return (
    <div className={styles.marqueeFixed}>
      <Marquee autoFill={true} pauseOnHover={pause ? pause : null}>
        {elementArr}
      </Marquee>
    </div>
  );
}
