import styled from "styled-components";
import introPicture from "../../images/desktop/image-header.jpg"

export const IntroWrapper = styled.section`
    background: #3EBFFF;
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    background: #3EBFFF url(${introPicture}) center / cover no-repeat;
`
export const IntroContainer = styled.div`
    width: 60%;
    height: 40%;
    display: grid;
    place-items: center;
    margin-bottom: 130px;
`

export const IntroHeader = styled.h1`
    text-transform: uppercase;
    letter-spacing: 8px;
    color: #fff;
    font-size: 48px;
`

export const ArrowDown = styled.img`
    display: block;
`