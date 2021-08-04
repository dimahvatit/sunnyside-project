import styled from 'styled-components';

export const NavWrap = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #3EBFFF;
    padding: 25px;
    font-family: 'Barlow', sans-serif;
    position: relative;
`

export const NavLogoWrap = styled.div`
    display: grid;
    place-items: center;
`

export const NavLogo = styled.h2`
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

export const NavLinks = styled.li`
    font-size: 16px;
    color: #fff;
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