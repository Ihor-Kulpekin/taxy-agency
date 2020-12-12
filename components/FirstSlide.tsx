import React from 'react';
import styled from 'styled-components';

import car from '../assets/car.png';

const WrapperFirstSlide = styled.div`
    text-align: center;
    h1 {
        font-size: 72px;
        font-weight: 900;
        font-family: 'Lato', sans-serif;
    }

    h3 {
        font-size: 20px;
        letter-spacing: 14px;
        font-family: 'Yu Gothic', serif;
        margin-bottom: 63px;
    }

    h1,
    h3 {
        color: #ffffff;
    }

    img {
        width: 85%;
        height: auto;
    }

    @media (max-width: 545px) {
        h1 {
            font-size: 50px;
        }

        h3 {
            font-size: 14px;
        }
    }

    @media (max-width: 400px) {
        h1 {
            font-size: 40px;
        }

        h3 {
            font-size: 10px;
        }
    }
`;

const FirstSlide = () => {
    return (
        <WrapperFirstSlide>
            <h1>+123 4567 8900</h1>
            <h3>www.psd.in.ua</h3>
            <img src={car} alt="car" />
        </WrapperFirstSlide>
    );
};

export default FirstSlide;
