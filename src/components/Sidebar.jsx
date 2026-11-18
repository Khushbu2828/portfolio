import { useState } from "react";
import Icon from "./Icon.jsx";
import { profile } from "../data.js";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`sidebar ${isOpen ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={profile.avatar} alt={profile.name} width="100" />
        </figure>

        <div className="info-content">
          <h1 className="name" title={profile.name}>{profile.name}</h1>
          <p className="title">{profile.title}</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
        >
          <span>Show Contacts</span>
          <Icon name="chevron-down" />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <ContactItem icon="mail" title="Email">
            <a href={`mailto:${profile.email}`} className="contact-link">{profile.email}</a>
          </ContactItem>

          <ContactItem icon="phone" title="Phone">
            <a href={profile.phoneHref} className="contact-link">{profile.phone}</a>
          </ContactItem>

          <ContactItem icon="calendar" title="Availability">
            <time>{profile.availability}</time>
          </ContactItem>

          <ContactItem icon="location" title="Location">
            <address>{profile.location}</address>
          </ContactItem>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {profile.socials.map((social) => (
            <li className="social-item" key={social.label}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={social.label}>
                <Icon name={social.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function ContactItem({ icon, title, children }) {
  return (
    <li className="contact-item">
      <div className="icon-box">
        <Icon name={icon} />
      </div>
      <div className="contact-info">
        <p className="contact-title">{title}</p>
        {children}
      </div>
    </li>
  );
}
