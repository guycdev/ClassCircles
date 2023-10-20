import React from "react";
import ContactForm from "./ContactForm";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`row ${styles.footer}`}>
      <div className={`col-lg col-5 ${styles.col}`}>
        <img src="#" alt="app logo" />
        <p>
          This website started as a creation for the 2023 Fall Hackathon
          sponsored by the Hackathon Club at Oregon State University. Some more
          text here might include further, more formal details about the
          background of this app.
        </p>
      </div>

      <div className={`col-lg ${styles.col}`}>
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
          <li className={styles.listItem}>
            <a href="#">Link to GitHub 1</a>
          </li>
        </ul>
      </div>
      <div className={`col-lg ${styles.col}`}>
        <h2 className={styles.header}>Links (Not in Nav)</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#">Link 1</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Link 1</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Link 1</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Link 1</a>
          </li>
        </ul>
      </div>
      <div className={`col-lg ${styles.col}`}>
        <h2 className={styles.header}>Let us know what you think!</h2>
        <ContactForm />
      </div>
    </footer>
  );
}
