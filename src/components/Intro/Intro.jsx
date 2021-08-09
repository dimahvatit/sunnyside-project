import React from 'react';
import src from '../../images/icon-arrow-down.svg';
import { ArrowDown, IntroContainer, IntroHeader, IntroWrapper } from './IntroElements';

const Intro = () => {
    return (
        <IntroWrapper>
            <IntroContainer>
                <IntroHeader>We are creatives</IntroHeader>
                <ArrowDown src={src} />
            </IntroContainer>
        </IntroWrapper>
    )
}
export default Intro;
