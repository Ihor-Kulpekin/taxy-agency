import React from 'react';
import styled from 'styled-components';

interface ButtonProp extends React.HTMLProps<HTMLButtonElement> {
    text?: string;
    backgroundColor?: string;
    align?: string;
}

const WrapperButton = styled.div<ButtonProp>`
    display: flex;
    justify-content: ${({ align }) => (align === 'right' ? 'flex-start' : 'center')};
    align-content: center;
`;

const StyledButton = styled.button<ButtonProp>`
    color: ${({ backgroundColor }) => (backgroundColor === 'yellow' ? '#000' : '#fff')};
    text-transform: uppercase;
    background-color: ${({ backgroundColor }) =>
        backgroundColor === 'yellow' ? '#ffc61a' : '#000'};
    border-radius: 7px;
    font-weight: bold;
    padding: 10px 25px 10px 25px;
    outline: none;
    border: none;
    width: ${({ type }) => (type === 'button' ? null : '100%')};
`;

const Button: React.FC<ButtonProp> = ({
    text = 'read more',
    type = 'button',
    align = 'right',
    backgroundColor
}) => {
    return (
        <WrapperButton align={align}>
            {/*@ts-ignore*/}
            <StyledButton type={type} backgroundColor={backgroundColor}>
                {text}
            </StyledButton>
        </WrapperButton>
    );
};

export default Button;
