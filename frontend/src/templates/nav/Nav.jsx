import React from "react";
import Logo from "../../components/Logo";
import NavItems from "./NavItems";
import { NavLink } from "react-router-dom";
import NavMisc from "./NavMisc";
import styles from "./Nav.module.css";
import { motion } from "framer-motion";

export default function Nav(props) {
  const { type, isClicked } = props;

  const navVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: type ? "-100%" : 0, opacity: !type ? 1 : 0 },
  };

  if (!type || (type && isClicked)) {
    return (
      <motion.nav
        className={`
          ${type ? styles.mobileNav : ""}
          ${
            type
              ? "d-flex flex-column align-items-center position-absolute"
              : "d-flex justify-content-between"
          }
        `}
        style={{
          gap: type ? "20px" : "0px",
        }}
        animate={isClicked ? "open" : "closed"}
        initial="closed"
        variants={navVariants}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div
          className={type ? "d-flex flex-column" : "d-flex align-items-center"}
        >
          <NavLink className={styles.logoLink}>
            <Logo />
          </NavLink>
          <div className={type ? styles.horizontal : styles.vertical}></div>
          <NavItems type={type} />
        </div>
        <div>
          <NavMisc type={type} />
        </div>
      </motion.nav>
    );
  } else {
    return null;
  }
}
