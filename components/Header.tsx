import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import MenuAdaptive from '../molecules/MenuAdaptive';

const WrapperHeader = styled.section`
    padding: 44px;
    width: 100%;
    margin-bottom: 143px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 900px) {
        margin-bottom: 40px;
    }

    @media (max-width: 400px) {
        padding: 20px;
    }
`;

const Header = () => {
    return (
        <WrapperHeader>
            <Logo />
            <MenuAdaptive />
        </WrapperHeader>
    );
};

export default Header;
