import React from 'react';
import styled from "styled-components";
import dropDowIcon from '../../public/assets/bx-chevron-down.png'
import decorationLine from '../../public/assets/Line 56.png'

const SFaqCard = styled.section`
  box-sizing: border-box;
  padding: 0 1em;
  margin: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  
  .faq-card {
    &__question-container {
      display: flex;
      justify-content: space-between;
      height: 50px;
      align-items: center;
    }

    &__question {
      margin: 0;
      font-size: 1em;
    }

    &__dropdown-icon {
      margin: 0;
      height: 30px;
      width: 30px;
    }

    &__decoration-line {
      margin: 0;
      width: 100%;
      height: 1px;
    }
  }
`

const FaqCardComponent = () => {
    return (
        <SFaqCard>
            <div className="faq-card__question-container">
                <h1 className="faq-card__question"> This is an example</h1>
                <img className="faq-card__dropdown-icon" src={dropDowIcon} alt=""/>
            </div>
            <img className="faq-card__decoration-line" src={decorationLine} alt=""/>
        </SFaqCard>
    );
};

export default FaqCardComponent;
