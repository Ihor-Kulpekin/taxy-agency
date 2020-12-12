import React from 'react';
import styled from 'styled-components';

const WrapperMenu = styled.div`
    display: flex;
    .menu-item {
        font-size: 17px;
        color: #fff;
        font-weight: 900;
        font-family: 'Lato', sans-serif;
        margin-right: 40px;
        text-transform: uppercase;
        :last-child {
            margin: 0;
        }
    }
`;

const Menu = () => {
    return (
        <WrapperMenu>
            <a href="#" className="menu-item">
                home
            </a>
            <a href="#" className="menu-item">
                about
            </a>
            <a href="#" className="menu-item">
                features
            </a>
            <a href="#" className="menu-item">
                blog
            </a>
            <a href="#" className="menu-item">
                order now
            </a>
            <a href="#" className="menu-item">
                contacts
            </a>
        </WrapperMenu>
    );
};

export default Menu;
