import React, { useState } from 'react';
import styled from 'styled-components';

interface CssProps {
    open: boolean;
}

const StyledBurger = styled.div<CssProps>`
    width: 2rem;
    height: 2rem;
    top: 50px;
    right: 20px;
    z-index: 20;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => (open ? '#ccc' : '#333')};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }

        &:nth-child(2) {
            transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }

        &:nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`;

const WrapperMenuMobile = styled.div<CssProps>`
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    z-index: 2;
    right: 0;
    height: 100%;
    width: ${({ open }) => (open ? '300px' : '0')};
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;

    .menu-item {
        color: #fff !important;
        text-transform: uppercase;
        margin-bottom: 30px;

        :hover {
            color: #483f3f !important;
        }
    }
`;

const MenuMobile = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <WrapperMenuMobile open={open}>
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
            </WrapperMenuMobile>
        </>
    );
};

export default MenuMobile;
