import React from "react";
import styles from "./AboutUs.module.css";
import AboutUsChart from "./AboutUsChart";
import Button from "../../../components/Button";
import { NavLink } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="my-5 p-0 container">
      <div className="row">
        <div className="col">
          <div className={`card ${styles.aboutUsCard}`}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6">
                  <AboutUsChart />
                </div>
                <div className="col-6 card">
                  <h2 className="underline mb-3 pb-1 border-bottom">
                    Empowering Student Communities
                  </h2>
                  <p>
                    Navigating through academic life can feel like a solitary
                    journey, but it doesn't have to be. Born out of the passion
                    and creativity from this year's hackathon, our platform
                    serves as a beacon for students seeking connection and
                    collaboration.
                    <br />
                    <br />
                    We believe that every student has something invaluable to
                    offer, and by bringing them together, we're not just
                    enhancing the academic experience, but we're building a
                    community. Dive in, discover groups that resonate with your
                    interests, share resources, and amplify your learning
                    journey. Together, we're better. Join us in redefining the
                    student experience.
                  </p>
                  <div className="d-flex justify-content-start my-3">
                    <NavLink to="./sign-up">
                      <Button content="Sign Up" style="primaryBtn" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
