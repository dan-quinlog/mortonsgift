import React from "react";

export default function (props) {
  console.log(props.projects);
  return (
    <div className="project-carousel">
      {props.projects &&
        props.projects.map((project) => {
          return (
            <div className="projectcard" key={project.id}>
              <div className="projectcard__id">{project.id}</div>
              <div className="projectcard__title">{project.title}</div>
              <div className="projectcard__content">{project.content}</div>
            </div>
          );
        })}
    </div>
  );
}
