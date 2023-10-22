import React from "react";
import AnimationText from "../../../components/AnimatedText";
import Typewriter from "typewriter-effect";
import Button from "../../../components/Button";
import MiscCard from "./MiscCard";
import BackgroundCircles from "../../../components/BackgroundCircles";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function HeroCard() {
  return (
    <motion.div
      className="card my-3 px-4 py-4 gap-4 position-relative"
      initial={{
        x: -500,
      }}
      animate={{
        x: 0,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <div>
        <em className="lead">Meet your community</em>
        <h1 className="display-5 fw-bold text-xl-start text-sm-center">
          <AnimationText content="Empower Your Campus Life with" />{" "}
          <motion.div
            className="d-sm-block d-xl-inline"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.7,
              },
            }}
          >
            <Typewriter
              options={{
                strings: [
                  "Community",
                  "Collaboration",
                  "Learning",
                  "Networking",
                  "Friendship",
                  "Growth",
                  "Creativity",
                  "Innovation",
                  "Support",
                  "Opportunity",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 1000,
              }}
            />
          </motion.div>
        </h1>
        <p className="lead my-4">
          <AnimationText
            content="Unlock new campus experiences and build meaningful connections. Your journey
          starts here."
          />
        </p>
        <div className="d-flex flex-column align-items-start gap-3 row">
          <HashLink to="#faq">
            <Button content="Learn More" style="primaryBtn" />
          </HashLink>
          <NavLink to="/sign-up">
            <Button content="Sign Up" style="secondaryBtn" />
          </NavLink>
        </div>
      </div>
      <div className="line-break"></div>
      <MiscCard />
      <BackgroundCircles />
    </motion.div>
  );
}
