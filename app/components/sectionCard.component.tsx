import React, {FunctionComponent} from 'react';
import styled from "styled-components";

export interface CardContent {
    illustration: string,
    alt: string,
    backgroundColor: string,
    textColor: string
    orientation: "right" | "left",
    title: string,
    text: string
}

const SSectionCard = styled.section<{ backgroundColor: string, textColor: string, orientation: "right" | "left" }>`
  padding: 2.5em 1em;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};

  .section-card {
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @media screen and (min-width: 1024px) {
        flex-direction: ${(props) => props.orientation === "right" ? "row-reverse" : "row"};
        width: 1076px;
        margin: 0 auto;
      }
    }

    &__illustration {
      width: 265px;
      @media screen and (min-width: 1024px) {
        width: 454px;
      }
    }

    &__text-container {
      display: flex;
      flex-direction: column;
      text-align: center;
      max-width: 590px;
      gap: 0.5em;
      @media screen and (min-width: 1024px) {
        text-align: left;
        height: 430px;
        justify-content: center;
      }
    }

    &__title {
      font-size: 1.5em;
      margin-top: 0.5em;
      margin-bottom: 0;
      @media screen and (min-width: 1024px) {
        font-size: 2em;
        margin: 0;
      }
    }

    &__description-text {
      font-size: 1em;
      margin: 0;
    }
`

const SectionCardComponent: FunctionComponent<{ card: CardContent }> = ({card}) => {
    return (
        <SSectionCard backgroundColor={card.backgroundColor} textColor={card.textColor} orientation={card.orientation}>
            <div className="section-card__container">
                <img className="section-card__illustration" src={card.illustration} alt={card.alt}/>
                <div className="section-card__text-container">
                    <h1 className="section-card__title">
                        {card.title}
                    </h1>
                    <p className="section-card__description-text">
                        {card.text}
                    </p>
                </div>
            </div>
        </SSectionCard>
    );
};

export default SectionCardComponent;
