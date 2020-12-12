import React from 'react';
import styled from 'styled-components';
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const WrapperForm = styled.div`
  width: 423px;
`

const HeadingForm = styled.div`
  height: 78px;
  background-color: #171717;
  display: flex;
  align-items: center;
 .heading-text {
    color: #fff;
    font-size: 34px;
font-weight: 900;
font-family: "Lato",serif;
text-align: center;
text-transform: uppercase;
margin-left: 38px;

  span {
  color:#ffc61a;
  }
 }
`


const StyledFormContent = styled.div`
  background-color: #fff;
  height: auto;
  padding: 30px;
  
  .heading-form-item {
   display: flex;
   flex-direction: row;
   margin-bottom: 50px;
 }
 
 .button {
  margin-top: 50px;
      padding: 0 10px 0 10px;
 }
`

const Form = () => {
    return (
        <WrapperForm>
            <HeadingForm>
                <h3 className="heading-text">
                    book a <span>cab</span>
                </h3>
            </HeadingForm>
            <StyledFormContent>
                <div className="heading-form-item">
                    <Input placeholder="Name"/>
                    <Input placeholder="Phone"/>
                </div>
                <div className="heading-form-item">
                    <Input placeholder="When"/>
                    <Input placeholder="Time"/>
                </div>
                <div className="heading-form-item">
                    <Input placeholder="Start"/>
                    <Input placeholder="End"/>
                </div>
                <Input placeholder="Choose Vehicle"/>
                <div className="button">
                    <Button text="submit" type="submit"/>
                </div>
            </StyledFormContent>
        </WrapperForm>
    )
}

export default Form;
