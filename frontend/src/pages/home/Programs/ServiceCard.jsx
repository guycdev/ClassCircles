import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { styled } from "@mui/system";
import Button from "../../../components/Button";
import { NavLink } from "react-router-dom";

const ServiceImage = styled(CardMedia)({
  height: 250,
});

export default function ServiceCard(props) {
  const { imageUrl, serviceName, description } = props;

  return (
    <div
      className="card"
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <ServiceImage image={imageUrl} title={serviceName} className="rounded" />
      <CardContent>
        <Typography variant="h6" component="div" className="text-center">
          {serviceName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="text-center"
        >
          {description}
        </Typography>
      </CardContent>
      <NavLink className="d-flex justify-content-center my-4" to="./sign-up">
        <Button content="Sign up" style="primaryBtn" />
      </NavLink>
    </div>
  );
}
