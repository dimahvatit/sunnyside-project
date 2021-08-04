import React from "react";
import Icon from "../../images/icon-hamburger.svg"
import {
    NavWrap,
    NavLogoWrap,
    NavLogo,
    NavLinksWrap,
    NavLinks,
    MobileMenuIcon,
} from "../Nav/NavElements";

const Nav = () => {
    return (
        <>
            <NavWrap>
                <NavLogoWrap>
                    <NavLogo>sunnyside</NavLogo>
                </NavLogoWrap>
                <NavLinksWrap>
                    <NavLinks>About</NavLinks>
                    <NavLinks>Services</NavLinks>
                    <NavLinks>Projects</NavLinks>
                    <NavLinks>
                        <ContactBtn>Contact</ContactBtn>
                    </NavLinks>
                </NavLinksWrap>
                <MobileMenuIcon src={Icon}>

                </MobileMenuIcon>
            </NavWrap>
        </>
    );
};

export default Nav;
