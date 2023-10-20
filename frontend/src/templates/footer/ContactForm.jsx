function ContactForm() {
  return (
    <form>
      <input type="email" placeholder="yourname@email.com" className="my-2" />
      <input type="textarea" className="my-2" />
      <button>Submit</button>
    </form>
  );
}

export default ContactForm;
