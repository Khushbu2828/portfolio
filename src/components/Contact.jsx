import { useState } from "react";
import Icon from "./Icon.jsx";
import { profile } from "../data.js";

const EMPTY_FORM = { fullname: "", email: "", message: "" };

export default function Contact({ isActive }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [note, setNote] = useState("");

  const isValid =
    form.fullname.trim() !== "" &&
    /^\S+@\S+\.\S+$/.test(form.email) &&
    form.message.trim() !== "";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  // Opens the visitor's email app with the message filled in.
  // Swap this for Formspree / EmailJS if you want messages sent without an email app.
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.fullname}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.fullname} (${form.email})`);
    setNote(`Opening your email app. If nothing opens, write to ${profile.email}.`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <article className={`contact ${isActive ? "active" : ""}`}>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe
            src="https://maps.google.com/maps?q=Bengaluru%2C%20Karnataka&z=11&output=embed"
            width="400"
            height="300"
            loading="lazy"
            title="Map of Bengaluru"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={form.fullname}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            id="message"
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button className="form-btn" type="submit" disabled={!isValid}>
            <Icon name="paper-plane" />
            <span>Send Message</span>
          </button>

          {note && <p className="form-note">{note}</p>}
        </form>
      </section>
    </article>
  );
}
