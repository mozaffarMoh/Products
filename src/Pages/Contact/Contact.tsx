import React from "react";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [empty, setEmpty] = React.useState(false);

  /* Empty fields function*/
  const makeFieldsEmpty = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  /* Empty Fields after 2 two seconds from empty is true */
  React.useEffect(() => {
    empty &&
      setTimeout(() => {
        makeFieldsEmpty();
        setEmpty(false);
      }, 2000);
  }, [empty]);

  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact-content">
        <div className="contact-text">
          <h2>
            Ask for my resume or see if we can build something amazing together?
            I’d love to hear from you!
          </h2>
        </div>
        <form
          className="contact-form"
          action="https://formspree.io/f/xleqekew"
          method="POST"
          target="_blank"
          onSubmit={() => setEmpty(true)}
        >
          <input
            type="text"
            placeholder="Name*"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email*"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Message*"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
