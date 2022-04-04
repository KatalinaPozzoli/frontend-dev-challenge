import React, {FunctionComponent, useState} from 'react';
import styled from "styled-components";
import dropDowIcon from '../../public/assets/bx-chevron-down.svg'
import decorationLine from '../../public/assets/Line 56.png'

export interface FaqsContent {
    question: string,
    answer: string
}

const SFaqCard = styled.section`
  background-color: white;
  box-sizing: border-box;
  padding: 0 1em;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  .faq-card {
    &__question-container {
      border: none;
      background-color: white;
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 50px;
      align-items: center;
    }

    &__question {
      text-align: left;
      margin: 0;
      color: var(--primary-base);
      line-height: normal;
    }

    &__dropdown-icon {
      margin: 0;
      height: 30px;
      width: 30px;

      &--opened {
        transform: rotate(180deg);
        transition: transform .3s;
      }
    }

    &__decoration-line {
      margin: 0;
      width: 100%;
      height: 1px;
    }

    &__answer {
      &-container {
        display: none;

        &--opened {
          display: flex;
          background-color: white;
        }
      }

      &-text {
        font-size: 1em;
        color: #191919;
      }
    }
  }
`

const FaqCardComponent: FunctionComponent<{ faq: FaqsContent }> = ({faq}) => {
    const [opened, setOpened] = useState(false)
    return (
        <SFaqCard>
            <button className="faq-card__question-container" onClick={() => setOpened(!opened)}>
                <h1 className="faq-card__question"> {faq.question} </h1>
                <img className={`faq-card__dropdown-icon
                ${opened ? 'faq-card__dropdown-icon--opened' : ''}
                 `} src={dropDowIcon} alt="dropdown icon"/>
            </button>
            <img className="faq-card__decoration-line" src={decorationLine} alt="decoration line"/>
            <div className={`
            faq-card__answer-container 
            ${opened ? 'faq-card__answer-container--opened' : ''}
            `}>
                <p className="faq-card__answer-text"> {faq.answer}</p>
            </div>
        </SFaqCard>
    );
};

export default FaqCardComponent;
