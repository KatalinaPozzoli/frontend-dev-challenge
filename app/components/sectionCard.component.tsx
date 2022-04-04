import React, {FunctionComponent} from 'react';
import styled from "styled-components";

export interface CardContent {
    illustration: string,
    alt: string,
    backgroundColor: string,
    textColor: string
    title: string,
    text: string
}

const SSectionCard = styled.section<{ backgroundColor: string, textColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5em 1em;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};

  .section-card {
    &__illustration {
      width: 265px;
    }

    &__title {
      font-size: 2em;
      text-align: center;
      margin-top: 0.5em;
      margin-bottom: 0;
    }

    &__description-text {
      font-size: 1em;
      margin-top: 0.5em;
      margin-bottom: 0;
      text-align: center;
    }
  }
`


const SectionCardComponent: FunctionComponent<{ card: CardContent }> = ({card}) => {
    return (
        <SSectionCard backgroundColor={card.backgroundColor} textColor={card.textColor}>
            <img className="section-card__illustration" src={card.illustration} alt={card.alt}/>
            <h1 className="section-card__title">
                {card.title}
            </h1>
            <p className="section-card__description-text">
                {card.text}
            </p>

        </SSectionCard>
    );
};

export default SectionCardComponent;
