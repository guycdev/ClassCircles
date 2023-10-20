import React from "react";
import AnimatedText from "../components/AnimatedText";
import styles from "./Components.module.css";
import { ReactSVG } from "react-svg";
import arrow from "../assets/misc/arrow.svg";

export default function Accordion(props) {
  const { heading, content, label, id, setId, type } = props;

  return (
    <div
      className={`${styles.accordionContainer} ${
        id == label ? styles.active : ""
      }`}
      onClick={() => setId(label)}
    >
      <div className={styles.headingContainer}>
        <div className={styles.accordionTitles}>
          <div className="svg">
            <ReactSVG src={type} />
          </div>
          <h4>{heading}</h4>
        </div>
        <div
          className={`svg ${styles.arrowSvg}`}
          style={{ transform: id == label ? "" : "rotate(180deg)" }}
        >
          <ReactSVG src={arrow} />
        </div>
      </div>

      <div
        className={styles.contentContainer}
        style={{ display: id == label ? "block" : "none" }}
      >
        <p>
          <AnimatedText content={content} />
        </p>
      </div>
    </div>
  );
}
