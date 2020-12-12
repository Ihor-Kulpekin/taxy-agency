import React from 'react';
import styled from "styled-components";

const WrapperInput = styled.div`
    padding: 0 10px;
  .input {
  width: 100%;
    outline: none;
    border: none;
    border-bottom: 3px solid #e4e4e4;
    height: 36px;
    padding-bottom: 14px;
    ::placeholder {
      font-size: 20px;
color: #4b4b4b;
font-weight: 500;
font-family: "Lato",sans-serif;
    }
  }
`

interface InputProps {
    placeholder?: string
}

const Input:React.FC<InputProps> = ({placeholder}) => {
    return (
        <WrapperInput>
            <input className="input" type="text" placeholder={placeholder}/>
        </WrapperInput>
    )
}

export default Input;
