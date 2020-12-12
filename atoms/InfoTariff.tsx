import React from 'react';
import styled from 'styled-components';
import Price from './Price';
import Button from './Button';

const WrapperInfoTariff = styled.div`
    padding-top: 124px;
    text-align: center;
    h3 {
        font-size: 30px;
        text-transform: uppercase;
        margin-bottom: 20px;
    }
    p {
        margin-bottom: 30px;
    }

    @media (max-width: 360px) {
        h3 {
            font-size: 24px;
        }
    }
`;

interface InfoTariffProps {
    heading?: string;
    backgroundColor?: string;
}

const InfoTariff: React.FC<InfoTariffProps> = ({ heading, backgroundColor }) => {
    return (
        <WrapperInfoTariff>
            <h3>{heading}</h3>
            <p>
                Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit,
                massa efficitur.
            </p>
            <Price text="1.5/MI" />
            <Button align="center" text="read more" backgroundColor={backgroundColor} />
        </WrapperInfoTariff>
    );
};

export default InfoTariff;
