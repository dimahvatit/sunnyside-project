import React from "react";
import ProjectItem from "./ProjectItem";
import "./style.css";

const Projects = ({ projects }) => {

	return (
		<section className='projects' id='projects'>
			{projects.map((project, i) => (
				<ProjectItem
					key={i}
					project={project}
				/>
			))}
		</section>
	);
};

export default Projects;
