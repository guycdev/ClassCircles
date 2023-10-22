import React from "react";
import styles from "./Nav.module.css";
import AnimatedText from "../../components/AnimatedText";
import { HashLink } from "react-router-hash-link";

export default function NavItems({ type }) {
  const listStyle = !type
    ? "d-flex align-items-center"
    : "d-flex flex-column align-items-center";

  return (
    <>
      <ul className={`${styles.navItems} ${listStyle}`}>
        <li>
          <HashLink to="/#home">
            <AnimatedText content="Home" />
          </HashLink>
        </li>
        <li>
          <HashLink to="/#about-us">
            <AnimatedText content="About Us" />
          </HashLink>
        </li>
        <li>
          <HashLink to="/#why-us">
            <AnimatedText content="Why Us" />
          </HashLink>
        </li>
        <li>
          <HashLink to="/#contact">
            <AnimatedText content="Contact Us" />
          </HashLink>
        </li>
      </ul>
    </>
  );
}
