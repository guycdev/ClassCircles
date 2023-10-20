import React from "react";
import styles from "./Components.module.css";
import { motion } from "framer-motion";

export default function Circles(props) {
  const { colors } = props;

  const elementArr = colors.map((color, index) => {
    return (
      <motion.div
        key={index}
        className={styles.circle}
        style={{ backgroundColor: `${color}` }}
        initial={{
          y: 500,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: index * 0.1,
          },
        }}
      ></motion.div>
    );
  });

  return <div className={styles.circleContainer}>{elementArr}</div>;
}
