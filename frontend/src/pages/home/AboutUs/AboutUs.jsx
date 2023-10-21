import React from "react";
import styles from "./AboutUs.module.css";
import AboutUsChart from "./AboutUsChart";
import Button from "../../../components/Button";

export default function AboutUs() {
  return (
    <section className="my-5 p-0 container" id="about-us">
      <div className="row">
        <div className="col">
          <div className={`card ${styles.aboutUsCard}`}>
            <div className="container">
              <div className="row align-items-center flex-lg-row flex-column ">
                <div className="col-lg-6 col-sm-12 d-none d-sm-block ">
                  <AboutUsChart />
                </div>
                <div className="col-lg-6 col-sm-12 card">
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
                    <Button content="Sign Up" style="primaryBtn" />
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
