import React from 'react';
import styled from "styled-components";
import brandLogo from '../../public/assets/White.png';
import separator from '../../public/assets/Separator.png'

const SFooter = styled.footer`
  background-color: var(--primary-base);
  padding: 2.5em 1em 1.5em;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .footer {
    &__brand-logo {
      width: 190px;
    }

    &__description-text {
      font-size: 0.8em;
      width: 100%;
      text-align: center;
    }

    &__separator {
      width: 100%;
      height: 0.5em;
      margin-bottom: 1em;
      max-width: 980px;
    }

    &__terms-politics-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5em;
    }

    &__terms-politic-item {
      margin: 0;
      padding: 0;
      font-size: 1em;
      text-align: center;
    }
  }

`
const politics = ["Política de Cookies", "Política de Privacidad", "Términos y condiciones de uso", "Cláusula Informativa de Consentimiento"]
const FooterComponent = () => {
    return (
        <SFooter>
            <img className="footer__brand-logo" src={brandLogo} alt="brand-logo"/>
            <p className="footer__description-text">La Mente es Maravillosa is a property of Grupo MContigo © 2012 –
                2020. All rights reserved.
                Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden
                servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte
                con su especialista de confianza.</p>
            <img className="footer__separator" src={separator} alt="separator-decoration"/>
            <ul className="footer__terms-politics-list">
                {politics.map((politic, index) => (
                    <li className="footer__terms-politic-item" key={`politic${index}`}> {politic} </li>
                ))}
            </ul>
        </SFooter>
    );
};

export default FooterComponent;
