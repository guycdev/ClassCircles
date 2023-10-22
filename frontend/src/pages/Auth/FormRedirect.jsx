import React from "react";
import { Link } from "react-router-dom";

export default function FormRedirect(props) {
  const { text, redirect, path } = props;

  return (
    <p className="my-3 small">
      {text}
      <Link to={path}>{redirect}</Link>
    </p>
  );
}
