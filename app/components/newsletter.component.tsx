import React from 'react';
import styled from "styled-components";
import InputComponent from "~/components/input.component";
import newsLetterImage from '../../public/assets/newsLetterIllustration.png'

const SNewsletterComponent = styled.section`
  background-color: var(--primary-light);
  .newsletter {
    &__container {
      width: 100%;
      display: flex;
      padding: 2.5em 0.5em;
      box-sizing: border-box;
      @media screen and (min-width: 1024px) {
        max-width: 1076px;
        margin: 0 auto;
        padding: 1.5em 0;
      }
    }

    &__image {
      display: none;
      @media screen and (min-width: 1024px) {
        width: 454px;
        display: flex;
        margin-top: -6em;
        margin-bottom: 0;
      }
    }

    &__text-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0;
      padding: 0.5em;
      box-sizing: border-box;
    }

    &__title {
      color: #191919;
      font-size: 24px;
      margin: 0;
    }

    &__description-text {
      margin-top: 0.5em;
      margin-bottom: 0;
    }

    &__input {
      margin-top: 1.5em;
      width: 100%;
    }
  }

`

const NewsletterComponent = () => {
    return (
        <SNewsletterComponent className="newsletter" id="newsletter">
            <div className="newsletter__container">
                <img className="newsletter__image" src={newsLetterImage} alt="A person with a message in an iPad illustration"/>
                <div className="newsletter__text-container">
                    <h1 className="newsletter__title"> Newsletter </h1>
                    <p className="newsletter__description-text">Recibe las últimas novedades y promociones en tu
                        email </p>
                    <div className="newsletter__input">
                        <InputComponent/>
                    </div>
                </div>
            </div>
        </SNewsletterComponent>
    );
};

export default NewsletterComponent;
