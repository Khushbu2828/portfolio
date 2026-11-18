import { useState } from "react";
import Icon from "./Icon.jsx";
import { projects, projectCategories } from "../data.js";

export default function Portfolio({ isActive }) {
  const [filter, setFilter] = useState("All");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const visibleProjects =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);

  const chooseFromSelect = (category) => {
    setFilter(category);
    setIsSelectOpen(false);
  };

  return (
    <article className={`portfolio ${isActive ? "active" : ""}`}>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* filter buttons (large screens) */}
        <ul className="filter-list">
          {projectCategories.map((category) => (
            <li className="filter-item" key={category}>
              <button
                className={filter === category ? "active" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* dropdown (small screens) */}
        <div className="filter-select-box">
          <button
            className={`filter-select ${isSelectOpen ? "active" : ""}`}
            onClick={() => setIsSelectOpen((open) => !open)}
            aria-expanded={isSelectOpen}
          >
            <div className="select-value">{filter === "All" ? "Select category" : filter}</div>
            <div className="select-icon">
              <Icon name="chevron-down" />
            </div>
          </button>

          <ul className="select-list">
            {projectCategories.map((category) => (
              <li className="select-item" key={category}>
                <button onClick={() => chooseFromSelect(category)}>{category}</button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {visibleProjects.map((project) => (
            <li className="project-item active" key={project.title}>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-item-link">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <Icon name="eye" />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.label}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
