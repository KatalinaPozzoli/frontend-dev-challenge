import React from 'react';
import styled from "styled-components";

const SInputComponent = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  box-sizing: border-box;
  border: 1px solid #555555;
  background-color: white;
  border-radius: 4px;
  gap: 1em;
  .wr-input{
    color: #555555;
    font-size: 1em;
    border: none;
    width: 100%;
    height: 40px;
    &__button{
      background-color: var(--primary-base);
      color: white;
      height: 40px;
      border: none;
      border-radius: 4px;
      font-family: var(--font-heading);
      font-weight: 400;
      font-size: 1em;
    }
  }
`

function InputComponent() {
    return (
        <SInputComponent>
            <input className="wr-input" type="text" placeholder="Ingresa tu correo"/>
            <button className="wr-input__button">
                Subscribirse
            </button>
        </SInputComponent>
    );
}

export default InputComponent;
