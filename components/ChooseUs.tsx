import React from 'react';
import styled from 'styled-components';

import background from '../assets/background.png';
import Heading from '../atoms/Heading';
import List from '../molecules/List';
import { Wrapper } from '../styled-compoents/Wrapper';
import Button from '../atoms/Button';

const WrapperChooseUs = styled.div`
    background-image: url('${background}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: black;
    width: 100%;
    height: auto;
    padding: 50px 20px;

    .wrapperHeading {
        margin-bottom: 80px;
    }

    .wrapperButton {
        padding-bottom: 70px;
    }

    @media (max-width: 900px) {
        background-image: none;
    }
`;

const ChooseUs = () => {
    return (
        <WrapperChooseUs>
            <div className="wrapperHeading">
                <Heading theme="dark" firstWord="we do best" lastWord="than you wish" />
            </div>
            <Wrapper>
                <List />
            </Wrapper>
            <div className="wrapperButton">
                <Button backgroundColor="yellow" align="center" />
            </div>
        </WrapperChooseUs>
    );
};

export default ChooseUs;
