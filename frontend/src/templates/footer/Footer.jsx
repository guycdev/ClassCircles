import React from "react";
import Logo from "../../components/Logo";
import ContactForm from "./ContactForm";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`row ${styles.footer}`}>
      <div className={`col-lg col-5 py-2 ${styles.col}`}>
        <Logo />
        <p className="mt-2">
          Welcome to ClassCircles, your gateway to successful collaboration and
          academic excellence. We're here to help you find like-minded peers and
          create study groups that work for you. With StudySpheres, you can
          connect, learn, and excel together.
        </p>
      </div>

      <div className={`col-lg py-2${styles.col}`}>
        <h2 className={styles.header}>Contact Information</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#">Link to GitHub 1</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Link to GitHub 1</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Link to GitHub 1</a>
          </li>
        </ul>
      </div>
      <div className={`col-lg py-2${styles.col}`}>
        <h2 className={styles.header}>Sitemap</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#">Home</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">User Dashboard</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Groups</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Schools</a>
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
