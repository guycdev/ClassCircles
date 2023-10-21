import React from "react";
import Button from "../../../components/Button";
import { motion } from "framer-motion";

export default function HeroImage(props) {
  const { img, heading, text, buttonText, id } = props;

  return (
    <motion.div
      className="card"
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
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column justify-content-center align-items-center gap-1">
        <h5 className="card-title text-center border-bottom py-1">{heading}</h5>
        <p className="card-text">{text}</p>
        <Button content={buttonText} style="primaryBtn" />
      </div>
    </motion.div>
  );
}
