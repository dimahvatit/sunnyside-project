import styled from 'styled-components';
import { Link } from 'react-scroll';

export const NavWrap = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    padding: 0 25px;
    font-family: 'Barlow', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
`

export const NavLogoWrap = styled.div`
    display: grid;
    place-items: center;
`

export const NavLogo = styled.img`
    font-family: 'Barlow', sans-serif;
    color: #fff;
`

export const NavLinksWrap = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-basis: 450px;
    list-style: none;
    
    @media screen and (max-width: 750px) {
        display: none;
    }
`

export const NavItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    flex-basis: 80px;
`

export const NavLinks = styled(Link)`
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    padding: 5px;
    text-align: center;

    /* &.active::after {
        content: '';
        width: 100%;
        height: 3px;
        background: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    } */
`

export const MobileMenuIcon = styled.img`
    position: absolute;
    top: 25px;
    right: 25px;
    display: none;

    @media screen and (max-width: 750px) {
        display: block;
    }
`

export const ContactBtn = styled.button`
    padding: 15px 20px;
    background: #fff;
    border: none;
    border-radius: 25px;
    font-family: 'Fraunces', serif;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background: rgba(255, 255, 255, 0.3);
        color: #fff;
    }
`