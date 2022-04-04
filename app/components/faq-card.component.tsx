import React, {FunctionComponent} from 'react';
import styled from "styled-components";
import dropDowIcon from '../../public/assets/bx-chevron-down.svg'
import decorationLine from '../../public/assets/Line 56.png'

export interface FaqsContent {
    question: string,
    answer: string
}

const SFaqCard = styled.button`
  border: none;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1em;
  margin: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  .faq-card {
    &__question-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 50px;
      align-items: center;
    }

    &__question {
      margin: 0;
      font-size: 1em;
      color: var(--primary-base);
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

const FaqCardComponent: FunctionComponent<{ faq: FaqsContent }> = ({faq})  => {
    return (
        <SFaqCard>
            <div className="faq-card__question-container">
                <h1 className="faq-card__question"> {faq.question} </h1>
                <img className="faq-card__dropdown-icon" src={dropDowIcon} alt="dropdown icon"/>
            </div>
            <img className="faq-card__decoration-line" src={decorationLine} alt="decoration line"/>
        </SFaqCard>
    );
};

export default FaqCardComponent;
