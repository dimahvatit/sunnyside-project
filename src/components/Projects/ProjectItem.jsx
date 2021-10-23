import React from "react";
import CrossSign from "./../Icons/CrossSign";

const ProjectItem = ({ project }) => {
	const hideAllInfo = () => {
		document.querySelectorAll(".project-info").forEach((el) => {
			el.classList.remove("show");
		});
	};

	return (
		<div
			className='project-item'
			style={{ backgroundImage: `url(${project.img})` }}>
			<div
				className='project-info'
				onClick={(e) => {
					hideAllInfo();
					e.currentTarget.classList.add("show");
				}}>
				<button
					className='close-btn'
					onClick={(e) => {
						e.stopPropagation();
						e.currentTarget.parentElement.classList.remove("show");
					}}>
					<CrossSign />
				</button>
				<p className='project-info-header'>{project.name}</p>
			</div>
		</div>
	);
};

export default ProjectItem;
