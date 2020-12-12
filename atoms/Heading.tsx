import React from 'react';
import styled from 'styled-components';

const WrapperHeading = styled.div`
  margin-bottom: 50px;
  text-align: center;
  text-transform: uppercase;
  
  span {
    color: ${({theme}) => theme === 'light' ? 'black' : '#fff'};
  }
  
  h1 {
    color: #ffc61a;
  }
`

interface HeadingProps {
    firstWord?: string
    lastWord?: string
    theme?: string
}

const Heading: React.FC<HeadingProps> = ({firstWord, lastWord, theme}) => {
    return (
        <WrapperHeading theme={theme}>
            <h1>
                {firstWord} <br/> <span>{lastWord}</span>
            </h1>
        </WrapperHeading>
    )
}

export default Heading;
