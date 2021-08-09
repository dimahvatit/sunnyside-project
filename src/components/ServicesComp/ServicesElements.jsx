import styled from "styled-components";

export const ServicesItem = styled.div`
    display: flex;
    flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`

export const ServicesText = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ServicesTextContent = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h2, p {
        width: 90%;
    }
`;

export const ServicesImageWrap = styled.div`
    width: 50%;
    height: auto;
    line-height: 0;
`;

export const ServH2 = styled.h2`
    font-size: 2.5rem;

    @media screen and (max-width: 1300px) {
    font-size: 2rem;
    }
`;

export const ServP = styled.p``;

export const ServBtn = styled.button`
`;

export const ServImage = styled.img`
    width: 100%;
    height: auto;
`;

export const ServLastItem = styled.div``;
