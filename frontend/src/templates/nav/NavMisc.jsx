import React from "react";
import Button from "../../components/Button";
import styles from "./Nav.module.css";
import Time from "./Time";

export default function NavMisc(props) {
  const { type } = props;

  return (
    <div className={`${styles.buttonContainer} ${!type ? "" : "flex-column"}`}>
      <Button content="Login" style="primaryBtn" />
      <Button content="Sign Up" style="secondaryBtn" />
      <Button content="Dashboard" style="primaryBtn" />
      <Time />
    </div>
  );
}
