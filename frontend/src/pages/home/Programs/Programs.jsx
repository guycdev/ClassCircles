import React from "react";
import ServiceCard from "./ServiceCard";
import { Typography } from "@mui/material";
import studying from "../../../assets/home/study.png";
import sports from "../../../assets/home/sports2.png";
import improv from "../../../assets/home/improv.jpg";

export default function Programs() {
  return (
    <section className="container my-5 d-none d-sm-block">
      <div className="row my-4 text-center">
        <div className="col-12">
          <Typography variant="h4" component="div">
            Our Community Programs
          </Typography>
        </div>
      </div>
      <div className="row justify-content-center d-flex gap-3 gap-md-0">
        <div className="col-10 col-md-4">
          <ServiceCard
            imageUrl={studying}
            serviceName="Educational Programs"
            description="From study groups to hackathon communities we offer it all"
          />
        </div>
        <div className="col-10 col-md-4">
          <ServiceCard
            imageUrl={sports}
            serviceName="Athletic Teams"
            description="Looking for an intermurial community? Checkout our offerings"
          />
        </div>
        <div className="col-10 col-md-4">
          <ServiceCard
            imageUrl={improv}
            serviceName="Hobbie Groups"
            description="Have a unique hobbie? Explore out diverse hobbie groups"
          />
        </div>
      </div>
    </section>
  );
}
