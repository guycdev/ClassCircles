import React from "react";
import Logo from "../../components/Logo";
import ContactForm from "./ContactForm";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={`row ${styles.footer}`} id="contact">
      <div className={`col-lg col-5 py-2 ${styles.col}`}>
        <Logo />
        <p className="mt-2">
          Welcome to ClassCircles, your gateway to successful collaboration and
          academic excellence. We're here to help you find like-minded peers and
          create study groups that work for you. With ClassCircless, you can
          connect, learn, and excel together.
        </p>
      </div>

      <div className={`col-lg py-2${styles.col}`}>
        <h2 className={styles.header}>Contact Information</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="https://github.com/gcWDev">github.com/gcWDev</a>
          </li>
          <li className={styles.listItem}>
            <a href="https://github.com/AriZeto">github.com/AriZeto</a>
          </li>
          <li className={styles.listItem}>
            <a href="https://github.com/mjande">github.com/mjande</a>
          </li>
        </ul>
      </div>
      <div className={`col-lg py-2${styles.col}`}>
        <h2 className={styles.header}>Sitemap</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div>
      <div className={`col-lg col-5 py-2 ${styles.col}`}>
        <h2 className={styles.header}>Let us know what you think!</h2>
        <ContactForm />
      </div>
    </footer>
  );
}
