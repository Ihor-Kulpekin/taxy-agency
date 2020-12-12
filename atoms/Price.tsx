import React from 'react';
import styled from 'styled-components';

interface PriceProps {
    currency?: string
    text?: string
}

const WrapperPrice = styled.div`
  text-align: center;
  color: #ffc61a;
  font-size: 44px;
  font-weight: 900;
  margin-bottom: 30px;
`

const Price: React.FC<PriceProps> = ({currency= '$', text}) => {
    return (
        <WrapperPrice>
            {currency}{text}
        </WrapperPrice>
    )
}

export default Price;
