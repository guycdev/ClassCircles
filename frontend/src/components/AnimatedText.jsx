import React from "react";
import { motion } from "framer-motion";

export default function Heading(props) {
  const { content } = props;

  const letters = content.split("");

  const elementsArr = letters.map((letter, index) => {
    return (
      <motion.span
        key={index}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1.3,
            delay: index / letters.length,
            type: "bounce",
          },
        }}
      >
        {letter}
      </motion.span>
    );
  });

  return <span className={`heading-span`}>{elementsArr}</span>;
}
