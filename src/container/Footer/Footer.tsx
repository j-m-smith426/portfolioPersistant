import React, { FormEvent, useState } from "react";
import { init, sendForm } from "@emailjs/browser";

import "./Footer.scss";
const Footer = () => {
  const {
    REACT_APP_EMAIL_USER,
    REACT_APP_EMAIL_SERVICE,
    REACT_APP_EMAIL_TEMPLATE,
  } = process.env;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  init(REACT_APP_EMAIL_USER);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendForm(
      REACT_APP_EMAIL_SERVICE,
      REACT_APP_EMAIL_TEMPLATE,
      "#contact-form"
    ).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div className="app__footer-box">
      <a id="contact" className="anchor" />
      <h3>Contact Me</h3>
      <div>
        <div className="app__contact-info">
          <h4>Email: Joabsmith4226@gmail.com</h4>
          <h4>Phone: 440-773-7270</h4>
        </div>
        <form
          onSubmit={handleSubmit}
          className="app__contact-form"
          id="contact-form"
        >
          <label htmlFor="name-field">Name: </label>
          <input type="text" name="name" id="name-field" />

          <label htmlFor="email-field">Email: </label>
          <input type="email" name="email" id="email-field" />

          <label htmlFor="message-area">Message: </label>
          <textarea
            name="message"
            id="message-area"
            cols={30}
            rows={10}
          ></textarea>

          <input type="submit" value="Send" />
        </form>
      </div>
      <a className="anchor" />
    </div>
  );
};

export default Footer;
