import React from 'react';
import styled from 'styled-components';

const WrapperLogo = styled.div`
    .logo {
        object-fit: cover;
        width: 160px;
        height: 50px;
        margin: 0;
        padding: 0;
    }
`;

const Logo = () => {
    return (
        <WrapperLogo>
            <img src="../assets/logo.png" className="logo" alt="logo" />
        </WrapperLogo>
    );
};

export default Logo;
