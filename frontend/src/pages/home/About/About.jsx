import Button from "../../../components/Button";
import { ReactSVG } from "react-svg";
import lineGraph from "../../../assets/data/line-graph.svg";
import barGraph from "../../../assets/data/bar-graph.svg";
import styles from "./About.module.css";

function About() {
  return (
    <section className="container my-5" id="why-us">
      <div className="row justify-content-lg-end justify-content-center">
        <div className={`col-lg-6 mr-auto mb-3 card ${styles.textCard} `}>
          <h1 className="border-bottom pb-1">
            ClassCircles is your source for finding the perfect study group
          </h1>
          <p>
            Looking for the perfect group of students to help you ace that
            really difficult class? Use ClassCircles to find a group by school
            and course. Get started by clicking the button below!
          </p>
          <div className="d-flex justify-content-center">
            <Button content="Find a group" style="primaryBtn" />
          </div>
        </div>

        <article className={`card col-lg ${styles.aboutCards}`}>
          <h2>Enhanced learning</h2>
          <p>
            Working with a Study Sphere allows students to explain concepts to
            each other and discuss complex topics.
          </p>
        </article>
        <div className={`col-lg card col-lg ${styles.aboutCards}`}>
          <h2>Average GPA Increase</h2>
          <ReactSVG src={lineGraph} />
        </div>
      </div>
      <div className="row justify-content-lg-end justify-content-center">
        <div className={`col-lg card shadow ${styles.aboutCards}`}>
          <h2>Increased Motivation</h2>
          <p>
            Knowing that others are relying on you to contribute can help keep
            everyone on track and committed to their studies.
          </p>
        </div>

        <div className={`col-lg card ${styles.aboutCards}`}>
          <h2>Social Interaction</h2>
          <p>
            Study Spheres promote social interaction and can make the learning
            process more enjoyable.
          </p>
        </div>
        <div className={`col-lg card ${styles.aboutCards}`}>
          <h2>Hours Spent Studying</h2>
          <ReactSVG src={barGraph} />
        </div>
      </div>
    </section>
  );
}

export default About;
