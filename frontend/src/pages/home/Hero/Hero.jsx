import React from "react";
import HeroCard from "./HeroCard";
import HeroImage from "../../../components/HeroImage";
import education from "../../../assets/home/education.png";
import sports from "../../../assets/home/sports.png";

export default function Hero() {
  return (
    <section className="container my-5 mt-0" id="home">
      <div className="row p-0 align-items-center gap-0">
        <div className="col-xxl-6 p-0">
          <HeroCard />
        </div>
        <div className="col-xxl-6  container p-0">
          <div className="row justify-content-center gap-3 gap-md-0 ">
            <div className="col-8 col-md-4 col-xxl-7">
              <HeroImage
                img={education}
                heading="Educational Groups"
                text="Lorem ipsum dolor sit amet."
                buttonText="Educational study groups"
                id={1}
              />
            </div>
            <div className="col-8 col-md-4 d-xxl-none">
              <HeroImage
                img={sports}
                heading="Athletic Groups"
                text="Lorem ipsum dolor sit amet."
                buttonText="Educational study groups"
                id={2}
              />
            </div>
            <div className="d-xxl-none col-8 col-md-4">
              <HeroImage
                img={sports}
                heading="Athletic Groups"
                text="Lorem ipsum dolor sit amet."
                buttonText="Educational study groups"
                id={2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
