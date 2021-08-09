import React from "react";
import {
    ServBtn,
    ServH2,
    ServicesImageWrap,
    ServicesItem,
    ServicesText,
    ServicesTextContent,
    ServImage,
    ServP,
} from "./ServicesElements";

const ServicesSection = ({
    imgStart,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgBack,
}) => {
    return (
        <ServicesItem imgStart={imgStart}>
            <ServicesText>
                <ServicesTextContent>
                    <ServH2>{headline}</ServH2>
                    <ServP>{description}</ServP>
                    <ServBtn>{buttonLabel}</ServBtn>
                </ServicesTextContent>
            </ServicesText>
            <ServicesImageWrap>
                <ServImage src={img} alt={alt} />
            </ServicesImageWrap>
        </ServicesItem>
    );
};

export default ServicesSection;
