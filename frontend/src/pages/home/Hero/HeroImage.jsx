import React from "react";
import Button from "../../../components/Button";
import { motion } from "framer-motion";

export default function HeroImage(props) {
  const { img, heading, text, buttonText, id } = props;

  return (
    <motion.div
      class="card"
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
      <img src={img} class="card-img-top p-3" alt="..." />
      <div class="card-body d-flex flex-column justify-content-center align-items-center gap-1">
        <h5 class="card-title text-center">{heading}</h5>
        <p class="card-text">{text}</p>
        <Button content={buttonText} style="primaryBtn" />
      </div>
    </motion.div>
  );
}
