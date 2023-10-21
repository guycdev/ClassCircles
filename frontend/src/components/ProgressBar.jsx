import React from "react";
import { LinearProgress } from "@mui/material";

export default function ProgressBar(props) {
  const { progress, inputCount } = props;

  const value = (progress / inputCount) * 100;

  return (
    <LinearProgress
      variant="determinate"
      value={value}
      className="progress-bar"
      sx={{
        "& .MuiLinearProgress-barColorPrimary": {
          backgroundColor: "var(--primary)",
          borderRadius: "50px",
          borderRight: value == 100 ? "" : "4px solid rgba(0,0,0,0.1)",
        },
        backgroundColor: "var(--secondary)",
        height: "20px",
        borderRadius: "50px",
        boxShadow: " 2px 6px 10px rgba(0, 0, 0, 0.25)",
      }}
    />
  );
}
