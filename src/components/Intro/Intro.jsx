import React from "react";
import { Link } from "react-scroll";
import webp from '../../images/desktop/image-header.webp';
import jpg from '../../images/desktop/image-header.jpg';
import ArrowDown from './../Icons/ArrowDown';
import "./style.css";

const Intro = () => {

	return (
		<section
			className='intro-wrapper'
			style={{ backgroundImage: `url(${webp})` }}
			data-bg={jpg}
			data-bg-webp={webp}>

			<div className='intro-container'>
				<h1 className='intro-header'>We are creatives</h1>
				<Link
					className='arrow-down-btn'
					to='about'
					smooth={true}
					offset={-80}
					duration={500}
					isDynamic={true}>
					<ArrowDown />
				</Link>
			</div>
		</section>
	);
};
export default Intro;
