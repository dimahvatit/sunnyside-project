import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll" ;
import NavMenu from "../NavMenu/NavMenu";
import Logo from "./../Icons/Logo";
import Burger from './../Icons/Burger';
import "./style.css";


const Nav = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleBurgerClick = () => {
		setIsMenuOpen(prev => !prev);
	}

	return (
		<nav className='nav-wrap'>
			<div className='nav-logo-wrap'>
				<a onClick={scroll.scrollToTop}>
					<Logo className='nav-logo' />
				</a>
			</div>
			<NavMenu />
			<button className='contact-btn'>Contact</button>

			<div className="mobile-menu-icon" onClick={handleBurgerClick}>
				<Burger />
			</div>

			{isMenuOpen && (<div className="mobile-menu">
				<NavMenu />
				<button className='contact-btn'>Contact</button>
			</div>)}

		</nav>
	);
};

export default Nav;
