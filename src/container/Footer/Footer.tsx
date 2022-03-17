import React, { FormEvent, useState } from "react";
import axios from "axios";

import "./Footer.scss";
const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    axios
      .post(
        "/",
        { name, email, message, "form-name": "contact" },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      )
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
    event.preventDefault();
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
          name="contact"
          className="app__contact-form"
          id="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="name-field">Name: </label>
          <input
            type="text"
            name="name"
            id="name-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email-field">Email: </label>
          <input
            type="email"
            name="email"
            id="email-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message-area">Message: </label>
          <textarea
            name="message"
            id="message-area"
            cols={30}
            rows={10}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <input type="submit" value="Send" />
        </form>
      </div>
      <a className="anchor" />
    </div>
  );
};

export default Footer;
