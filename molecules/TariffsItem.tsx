import React from 'react';
import styled from 'styled-components';
import tariffsCar from '../assets/tariffs_car.png';
import InfoTariff from '../atoms/InfoTariff';

interface TariffsItemProps {
    heading?: string;
    backgroundColor?: string;
}

const WrapperTariffsItem = styled.div<TariffsItemProps>`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 374px;
    height: 425px;
    background-color: ${({ backgroundColor }) =>
        backgroundColor === 'yellow' ? '#f5f4f2' : '#ffc61a'};
    margin-right: 39px;
    margin-top: 69px;
    padding: 0 30px;
    margin-bottom: 30px;

    :last-child {
        margin-right: 0;
    }

    .img {
        max-width: 100%;
        height: auto;
        position: absolute;
        top: -64px;
        left: 0;
    }

    .triangle {
        position: absolute;
        width: 0;
        height: 0;
        border-bottom: 75px solid #1b1b1b;
        border-left: 75px solid transparent;
        bottom: 0;
        right: 0;
    }

    .star {
        position: absolute;
        clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
        );
        width: 28px;
        height: 28px;
        bottom: 9px;
        right: 9px;
        background-color: #ffc61a;
    }

    @media (max-width: 786px) {
        margin-right: 0;
    }
`;

const TariffsItem: React.FC<TariffsItemProps> = ({ heading, backgroundColor }) => {
    return (
        <WrapperTariffsItem backgroundColor={backgroundColor}>
            <img className="img" src={tariffsCar} alt="tariffs-car" />
            <InfoTariff heading={heading} backgroundColor={backgroundColor} />
            {backgroundColor === undefined ? (
                <>
                    <div className="triangle" />
                    <div className="star" />
                </>
            ) : null}
        </WrapperTariffsItem>
    );
};

export default TariffsItem;
