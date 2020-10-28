import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
  console.log(props.projects);
  return (
    <div className="project-carousel">
      {props.projects &&
        props.projects.map((project) => {
          return (
            <Link
              className="projectcard"
              key={project.id}
              to={`project/${project.id}`}
            >
              <div className="projectcard__image">
                <img
                  className="project__image__thumb"
                  src="http://via.placeholder.com/200x200"
                  alt="product"
                />
              </div>
              <div className="projectcard__title">{project.title}</div>
              <div className="projectcard__price">${project.price}</div>
              <div className="projectcard__content">{project.content}</div>
            </Link>
          );
        })}
    </div>
  );
}
