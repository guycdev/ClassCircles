import React from "react";
import Button from "../../components/Button";
import styles from "./Nav.module.css";
import Time from "./Time";
import { NavLink } from "react-router-dom";

export default function NavMisc(props) {
  const { type } = props;

  return (
    <div className={`${styles.buttonContainer} ${!type ? "" : "flex-column"}`}>
      <Button content="Login" style="primaryBtn" />
      <Button content="Sign Up" style="secondaryBtn" />
      <NavLink to="./dashboard">
        <Button content="Dashboard" style="primaryBtn" />
      </NavLink>
      <Time />
    </div>
  );
}
