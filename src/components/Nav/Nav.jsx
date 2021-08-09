import React from "react";
import Icon from "../../images/icon-hamburger.svg";
import {
    NavWrap,
    NavLogoWrap,
    NavLogo,
    NavLinksWrap,
    NavLinks,
    MobileMenuIcon,
    ContactBtn,
    NavItem,
} from "../Nav/NavElements";
import src from "../../images/logo.svg";

const Nav = () => {

    return (
        <>
            <NavWrap>
                <NavLogoWrap>
                    <NavLogo src={src} />
                </NavLogoWrap>
                <NavLinksWrap>
                    <NavItem>
                        <NavLinks
                            smooth={true}
                            spy={true}
                            exact='true'
                            offset={-80}
                            duration={500}
                            to='/'>
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            smooth={true}
                            spy={true}
                            exact='true'
                            offset={-80}
                            duration={500}
                            to='/'>
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            smooth={true}
                            spy={true}
                            exact='true'
                            offset={-80}
                            duration={500}
                            to='/'>
                            Projects
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <ContactBtn>Contact</ContactBtn>
                    </NavItem>
                </NavLinksWrap>
                <MobileMenuIcon src={Icon}></MobileMenuIcon>
            </NavWrap>
        </>
    );
};

export default Nav;
