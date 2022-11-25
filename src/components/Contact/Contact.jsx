import React from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import swal from "sweetalert";

const Contact = () => {
  const initiaValues = {
    name: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initiaValues);

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5s3bf4n",
        "template_kn17zqj",
        form.current,
        "4geYDVJkmUOBA7IZ0"
      )
      .then(
        (result) => {
          console.log(result.text);

          swal({
            title: "Message Sent !",
            text: "Thanks for messaging me.",
            type: "success",
          });

          setFormValues(initiaValues);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-icon" />
            <h4>Email</h4>
            <h5>tikaramac19@gmail.com</h5>
            <a href="https://tikaramac19.github.io/messageMe/" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact-option">
            <BsMessenger className="contact-icon" />
            <h4>Messenger</h4>
            <h5>Tikaram Ac</h5>
            <a href="https://m.me//tikaram.acharya.7927/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-icon" />
            <h4>WhatsApp</h4>
            <h5>+977 9847296882</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9847296882"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* direct contact */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="your full name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="your email"
            required
            value={formValues.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            value={formValues.message}
            id="me"
            cols="30"
            rows="7"
            placeholder="your message..."
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
