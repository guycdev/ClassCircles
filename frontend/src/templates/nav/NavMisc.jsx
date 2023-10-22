import React from "react";
import Button from "../../components/Button";
import styles from "./Nav.module.css";
import Time from "./Time";
import { NavLink } from "react-router-dom";

export default function NavMisc(props) {
  const { type } = props;

  return (
    <div className={`${styles.buttonContainer} ${!type ? "" : "flex-column"}`}>
      <NavLink to="./log-in">
        <Button content="Login" style="primaryBtn" />
      </NavLink>
      <NavLink to="./sign-up">
        <Button content="Sign Up" style="secondaryBtn" />
      </NavLink>
      <Button content="Dashboard" style="primaryBtn" />
      <Time />
    </div>
  );
}
