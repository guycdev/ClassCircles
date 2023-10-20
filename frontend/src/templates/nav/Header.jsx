import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Nav.module.css";
import Nav from "./Nav";

export default function Header() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1200);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 1200);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.header
      className={
        isMobileView ? styles.navContainerMobile : styles.navContainerDesktop
      }
      initial={{
        y: isMobileView ? 0 : -500,
      }}
      animate={{
        y: isMobileView ? 0 : 20,
        transition: {
          duration: 0.5,
        },
      }}
    >
      {isMobileView && !isClicked ? (
        <div
          className="burger-icon"
          onClick={() => setIsClicked(true)}
          style={{ opacity: isClicked ? "0" : "1" }}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      ) : (
        <></>
      )}
      <Nav type={isMobileView} isClicked={isClicked} />
      {isClicked ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.7,
            transition: {
              duration: 0.7,
            },
          }}
          className={styles.overLay}
          onClick={() => setIsClicked(false)}
        ></motion.div>
      ) : (
        <></>
      )}
    </motion.header>
  );
}
