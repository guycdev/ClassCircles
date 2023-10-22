import emailjs from "@emailjs/browser";
import { useState } from "react";
import Button from "../../components/Button";

function ContactForm() {
  emailjs.init("s5nHQFBbRv2Iou2n_");

  const [formData, setFormData] = useState({
    email: "",
    body: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const emailData = {
      user_email: formData.email,
      message: formData.body,
      contact_number: (Math.random() * 100000) | 0,
    };

    emailjs.send("study_spheres", "study_spheres_contact", emailData).then(
      function () {
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="yourname@email.com"
            className="my-2 form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Questions/Comments</label>
          <textarea
            id="comments"
            name="body"
            className="my-2 form-control"
            rows="3"
            onChange={handleChange}
          />
        </div>
        <Button content="Submit" style="primaryBtn" />
      </form>
    </>
  );
}

export default ContactForm;
