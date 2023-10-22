import React from "react";
import HeroCard from "./HeroCard";
import HeroImage from "../../../components/HeroImage";
import education from "../../../assets/home/education.png";
import sports from "../../../assets/home/sports.png";
import hobbies from "../../../assets/home/hobbies.png";
import { HashLink } from "react-router-hash-link";

export default function Hero() {
  return (
    <section className="container my-5 mt-0" id="home">
      <div className="row p-0 align-items-center gap-0">
        <div className="col-xxl-6 p-0">
          <HeroCard />
        </div>
        <div className="col-xxl-6  container p-0">
          <div className="row justify-content-center gap-3 gap-md-0 ">
            <HashLink className="col-8 col-md-4 col-xxl-7 small" to="#faq">
              <HeroImage
                img={education}
                heading="Educational Groups"
                text="From study groups to tutors we have it all"
                buttonText="Learn More"
                id={1}
              />
            </HashLink>
            <HashLink className="col-8 col-md-4 d-xxl-none" to="#faq">
              <HeroImage
                img={sports}
                heading="Athletic Groups"
                text="Recreational and competitve leagues"
                buttonText="Learn More"
                id={2}
              />
            </HashLink>
            <HashLink className="d-xxl-none col-8 col-md-4" to="#faq">
              <HeroImage
                img={hobbies}
                heading="Recreational Groups"
                text="Niche hobbies and fun times"
                buttonText="Learn More"
                id={2}
              />
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
}
