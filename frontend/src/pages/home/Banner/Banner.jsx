import React from "react";
import { Typography } from "@mui/material";
import Button from "../../../components/Button";
import community from "../../../assets/home/community.jpg";
const Banner = () => {
  return (
    <div className="container my-5 d-none d-lg-block card">
      <div className="row justify-content-between align-items-center">
        <div className="col-6 gap-4 d-flex flex-column">
          <Typography variant="h4" gutterBottom>
            Looking for that on campus community? We pride ourselves over Look
            no further
          </Typography>
          <Typography variant="body1" gutterBottom>
            If you ever felt as lost as we have during your first time on
            campus, then we have the solution for you. Our personalized groups
            offer a sense of belonging like no other, giving you the full
            autonomy to find groups that align with you needs. Dont find a group
            that you like? Create your own using our group dashboard.
          </Typography>
          <div className="d-flex justify-content-center">
            <Button content="Sign up" style="primaryBtn" />
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <img src={community} alt="" className="img-fluid rounded " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
