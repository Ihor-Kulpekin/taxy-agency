import React from 'react';
import styled from 'styled-components';

import Heading from '../atoms/Heading';
import TariffsItem from '../molecules/TariffsItem';

const WrapperTariffs = styled.div`
    .tariffs {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 60px;
    }

    @media (max-width: 786px) {
        .tariffs {
            padding: 20px;
        }
    }
`;

const Tariffs = () => {
    return (
        <WrapperTariffs>
            <Heading theme="light" firstWord="our" lastWord="tariffs" />
            <div className="tariffs">
                <TariffsItem heading="economy class" backgroundColor="yellow" />
                <TariffsItem heading="standard class" />
                <TariffsItem heading="business class" backgroundColor="yellow" />
            </div>
        </WrapperTariffs>
    );
};

export default Tariffs;
