import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import AnimatedText from "../../components/AnimatedText";

export default function NavItems(props) {
  const { type } = props;

  return (
    <>
      <ul
        className={`${styles.navItems} ${
          !type
            ? "d-flex align-items-center"
            : "d-flex flex-column align-items-center"
        }`}
      >
        <br />
        <NavLink to="./">
          <AnimatedText content="Home" />
        </NavLink>
        <NavLink to="./">
          <AnimatedText content="About Us" />
        </NavLink>
        <NavLink to="./">
          <AnimatedText content="Why Us" />
        </NavLink>
        <NavLink to="./">
          <AnimatedText content="Contact Us" />
        </NavLink>
      </ul>
    </>
  );
}
