import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <img src="#" alt="app logo" />
        <p>
          This website started as a creation for the 2023 Fall Hackathon
          sponsored by the Hackathon Club at Oregon State University. Some more
          text here might include further, more formal details about the
          background of this app.
        </p>
      </div>

      <div>
        <h2>Contact Information</h2>
        <a href="#">Link to GitHub 1</a>
        <a href="#">Link to GitHub 2</a>
        <a href="#">Link to GitHub 3</a>
        <a href="#">Link to GitHub 4</a>
      </div>
      <div>
        <h2>Links (Not in Nav)</h2>
        <a href="#">Link 1</a>
        <a href="#">Link 1</a>
        <a href="#">Link 1</a>
        <a href="#">Link 1</a>
      </div>
      <div>
        <h2>Let us know what you think!</h2>
        <form>
          <input type="email" />
          <input type="textarea" />
          <button>Submit</button>
        </form>
      </div>
    </footer>
  );
}
