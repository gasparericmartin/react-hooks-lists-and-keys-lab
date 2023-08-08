import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projects.map(project => {
        return <ProjectItem technologies={project.technologies}
                name={project.name}
                about={project.about}
                key={project.name} />
      })
      }
      </div>
    </div>
  );
}

export default ProjectList;
