import React from 'react';
import styled from "styled-components";
import InputComponent from "~/components/input.component";

const SNewsletterComponent = styled.section`
  background-color: var(--primary-light);
  padding: 2.5em 1em;

  .wr-newsletter {
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
      width: 350px;
    }
  }

`

const NewsletterComponent = () => {
    return (
        <SNewsletterComponent className="wr-newsletter">
            <h1 className="wr-newsletter__title"> Newsletter </h1>
            <p className="wr-newsletter__description-text">Recibe las últimas novedades y promociones en tu email </p>
            <div className="wr-newsletter__input">
                <InputComponent/>
            </div>
        </SNewsletterComponent>
    );
};

export default NewsletterComponent;
