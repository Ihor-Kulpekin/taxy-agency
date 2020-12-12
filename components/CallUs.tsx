import React from 'react';
import styled from 'styled-components';

const WrapperCallUs = styled.div`
    background-color: #ffc61a;
    height: auto;
    padding: 50px 0 50px 0;

    h1 {
        font-size: 72px;
        font-weight: 900;
        font-family: 'Lato', sans-serif;
    }

    h3 {
        font-size: 35px;
        font-family: 'Lato', serif;
        margin-bottom: 23px;
    }

    h1,
    h3 {
        text-align: center;
        color: #000;
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 50px;
        }

        h3 {
            font-size: 25px;
        }
    }

    @media (max-width: 400px) {
        h1 {
            font-size: 30px;
        }
    }
`;

const CallUs = () => {
    return (
        <WrapperCallUs>
            <h3>We are Ready to Take Your Call 24 Hours, 7 Days!</h3>
            <h1>+123 4567 8900</h1>
        </WrapperCallUs>
    );
};

export default CallUs;
