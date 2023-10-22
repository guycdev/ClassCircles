import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import styles from "./Components.module.css";

export default function HeroImage(props) {
  const { img, heading, text, buttonText, id, examples } = props;

  return (
    <motion.div
      className="card d-flex h-100 text-center"
      initial={{
        x: 1250,
      }}
      animate={{
        x: 1,
        transition: {
          duration: 0.5,
          delay: 0.1 * id,
        },
      }}
    >
      <div className={`position-relative ${styles.overlayContainer}`}>
        <img src={img} className="card-img-top" alt="..." />
        {examples && (
          <div className={styles.exampleOverlay}>
            {examples.map((example, index) => {
              return (
                <p className={styles.example} key={index}>
                  {example}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <div className="card-body d-flex flex-column justify-content-between align-items-center gap-2">
        <h5 className="card-title text-center border-bottom py-1">{heading}</h5>
        <p className="card-text">{text}</p>
        <Button content={buttonText} style="primaryBtn" />
      </div>
    </motion.div>
  );
}
