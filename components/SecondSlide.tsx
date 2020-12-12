import React from 'react';
import styled from 'styled-components';
import Info from '../molecules/Info';
import Form from '../molecules/Form';
import { Wrapper } from '../styled-compoents/Wrapper';

const WrapperSecondSlide = styled.div`
    background-color: #ffc61a;
    margin-bottom: 64px;
    padding: 143px 20px 60px 20px;
`;

const StyledWrapper = styled(Wrapper)`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        justify-content: center;
    }
`;

const SecondSlide = () => {
    return (
        <WrapperSecondSlide>
            <StyledWrapper>
                <Info />
                <Form />
            </StyledWrapper>
        </WrapperSecondSlide>
    );
};

export default SecondSlide;
