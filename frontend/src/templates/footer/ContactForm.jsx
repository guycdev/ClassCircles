import Button from "../../components/Button";

function ContactForm() {
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="yourname@email.com"
            className="my-2 form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Questions/Comments</label>
          <textarea id="comments" className="my-2 form-control" rows="3" />
        </div>
      </form>
      <Button content="Submit" style="primaryBtn" />
    </>
  );
}

export default ContactForm;
