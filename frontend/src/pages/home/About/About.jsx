import Button from "../../../components/Button";
import { ReactSVG } from "react-svg";
import lineGraph from "../../../assets/data/line-graph.svg";
import barGraph from "../../../assets/data/bar-graph.svg";
import styles from "./About.module.css";

function About() {
  return (
    <section className="container my-5">
      <div className="row">
        <article className="col-lg-6 col-12 mb-3">
          <div className={`card ${styles.textCard}`}>
            <h1>
              ClassCircles is your source for finding the perfect study group.
            </h1>
            <p className={styles.cardText}>
              Looking for the perfect group of students to help you ace that
              really difficult class? Use ClassCircles to find a group by school
              and course. Get started by clicking the button below!
            </p>
            <div className="d-flex justify-content-center">
              <Button content="Find a group" style="primaryBtn" />
            </div>
          </div>
        </article>

        <article className="col-lg-3 col-6">
          <div className={`card ${styles.aboutCards}`}>
            <h2>Enhanced learning</h2>
            <p className={styles.cardText}>
              Working with a ClassCircle allows students to explain concepts to
              each other and discuss complex topics.
            </p>
          </div>
        </article>
        <article className="col-lg-3 col-6">
          <div className={`card ${styles.aboutCards}`}>
            <h2>Average GPA Increase</h2>
            <ReactSVG src={lineGraph} />
          </div>
        </article>
      </div>
      <div className="row">
        <article className="col-lg-3 col-6">
          <div className={`card ${styles.aboutCards}`}>
            <h2>Increased Motivation</h2>
            <p className={styles.cardText}>
              Knowing that others are relying on you to contribute can help keep
              everyone on track and committed to their studies.
            </p>
          </div>
        </article>

        <article className="col-lg-3 col-6">
          <div className={`card ${styles.aboutCards}`}>
            <h2>Problem Solving</h2>
            <p className={styles.cardText}>
              Collaborating in a ClassCircle encourages the development of
              critical thinking and problem-solving skills, which are valuable
              in various aspects of life.
            </p>
          </div>
        </article>

        <article className="col-lg-3 col-6">
          <div className={`card ${styles.aboutCards}`}>
            <h2>Social Interaction</h2>
            <p className={styles.cardText}>
              ClassCircles promotes social interaction and can make the learning
              process more enjoyable.
            </p>
          </div>
        </article>

        <article className="col-lg-3 col-6">
          <div className={`card ${styles.aboutCards}`}>
            <h2>Hours Spent Studying</h2>
            <ReactSVG src={barGraph} />
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
