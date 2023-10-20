import React from "react";
import styles from "./Components.module.css";
import { motion } from "framer-motion";

export default function Button(props) {
  const { content, style } = props;

  return (
    <motion.button
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.7,
        },
      }}
      className={`${styles[style]}`} // use the style prop here
    >
      {content}
    </motion.button>
  );
}
