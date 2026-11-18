import Icon from "./Icon.jsx";
import { experience, education, skills } from "../data.js";

export default function Resume({ isActive }) {
  return (
    <article className={`resume ${isActive ? "active" : ""}`}>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <Timeline icon="briefcase" title="Experience" items={experience} />
      <Timeline icon="book" title="Education" items={education} />

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {skills.map((skill) => (
            <li className="skills-item" key={skill.name}>
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.value}>{skill.value}%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: `${skill.value}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

function Timeline({ icon, title, items }) {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <Icon name={icon} />
        </div>
        <h3 className="h3">{title}</h3>
      </div>

      <ol className="timeline-list">
        {items.map((item) => (
          <li className="timeline-item" key={item.title}>
            <h4 className="h4 timeline-item-title">{item.title}</h4>
            <span>{item.period}</span>
            <p className="timeline-text">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
