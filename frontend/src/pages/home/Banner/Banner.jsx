import React from "react";
import { Typography } from "@mui/material";
import img from "../../../assets/dash/sports.jpg";
import Button from "../../../components/Button";
const Banner = () => {
  return (
    <div className="container my-5 d-none d-lg-block card">
      <div className="row justify-content-between align-items-center">
        <div className="col-6 gap-4 d-flex flex-column">
          <Typography variant="h4" gutterBottom>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, voluptas.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            porro voluptates veritatis laudantium in vitae fugit aliquam vero!
            Optio rem temporibus necessitatibus blanditiis eius dolor fuga culpa
            voluptates unde sint!
          </Typography>
          <div className="d-flex justify-content-center">
            <Button content="Sign up" style="primaryBtn" />
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <img src={img} alt="" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
