import styles from "./About.module.css";

function About() {
  return (
    <section className="container my-5">
      <div className="row justify-content-lg-end justify-content-sm-center">
        <div className="col-lg-6 mr-auto mb-3">
          <h1>
            ClassCircles is your source for finding the perfect study group.
          </h1>
          <p>
            Looking for the perfect group of students to help you ace that
            really difficult class? Use ClassCircles to find a group by school
            and course. Get started by clicking the button below!
          </p>
          <button className="btn btn-primary">Find a group</button>
        </div>

        <article className={`card col-lg shadow-sm ${styles.aboutCards}`}>
          <h2>Advantage 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            convallis elementum dapibus. Suspendisse et aliquam nunc, at laoreet
            justo.
          </p>
        </article>
        <div className={`col-lg card col-lg shadow-sm ${styles.aboutCards}`}>
          <h2>Data 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            convallis elementum dapibus. Suspendisse et aliquam nunc, at laoreet
            justo.
          </p>
        </div>
      </div>
      <div className="row justify-content-lg-end justify-content-sm-center">
        <div className={`col-lg card shadow-sm ${styles.aboutCards}`}>
          <h2>Advantage 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            convallis elementum dapibus. Suspendisse et aliquam nunc, at laoreet
            justo.
          </p>
        </div>

        <div className={`col-lg card shadow-sm ${styles.aboutCards}`}>
          <h2>Advantage 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            convallis elementum dapibus. Suspendisse et aliquam nunc, at laoreet
            justo.
          </p>
        </div>
        <div className={`col-lg card shadow-sm ${styles.aboutCards}`}>
          <h2>Data 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            convallis elementum dapibus. Suspendisse et aliquam nunc, at laoreet
            justo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
