import React from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import NavMenu from "../NavMenu/NavMenu";
import Facebook from "../Icons/Facebook";
import Instagram from './../Icons/Instagram';
import Twitter from './../Icons/Twitter';
import Pinterest from './../Icons/Pinterest';
import Logo from './../Icons/Logo';


const Footer = () => {
	return (
		<footer>
			<div className='footer-inner container'>
				<div className='nav-logo-wrap footer-logo-wrap'>
					<a onClick={scroll.scrollToTop}>
						<Logo className='footer-logo' />
					</a>
				</div>
                <NavMenu className='footer-menu'/>
				<div className='socials'>
					<a href='#'>
						Facebook link
						<Facebook/>
					</a>
					<a href='#'>
						Instagram link
						<Instagram />
					</a>
					<a href='#'>
						Twitter link
						<Twitter />
					</a>
					<a href='#'>
						Pinterest link
						<Pinterest />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
