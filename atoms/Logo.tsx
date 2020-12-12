import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';

const WrapperLogo = styled.div`
  .logo{
    object-fit: cover;
    width: 160px;
    height: 50px;
    margin: 0;
    padding: 0;
  }
`

const Logo = () => {
    return (
        <WrapperLogo>
            <img src={logo} className="logo" alt="logo" />
        </WrapperLogo>
    )
}

export default Logo;
