import React from 'react';
import styled from 'styled-components';
import Button from "../atoms/Button";

const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  h1, h3 {
    font-weight: 900;
    font-family: "Lato",sans-serif;
    text-transform: uppercase;
    text-align: left;
  }
  
  h1, h3, p {
  font-family: "Lato",serif;
  margin: 0;
  }
  
  h1 {
  font-size: 50px;
color: #101010;
font-family: "Lato",sans-serif;
margin-bottom: 45px;
max-width: 650px;
  }
  
  h3 {
  font-size: 35px;
color: #000000;
margin-bottom: 25px;
  }
  
  p {
  width: 558px;
height: 169px;
font-size: 18px;
color: #101010;
font-weight: 400;
margin-bottom: 20px;
  }
  
  @media (max-width: 1024px) {
    display: none;
  }
`

const Info = () => {
    return (
        <WrapperInfo>
            <h3>best in city</h3>
            <h1>Trusted Cab Servies in New York</h1>
            <p>
                Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris.Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris.
            </p>
            <Button />
        </WrapperInfo>
    )
}

export default Info;
