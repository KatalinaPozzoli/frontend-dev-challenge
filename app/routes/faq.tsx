import React from 'react';
import styled from "styled-components";
import FaqCardComponent, {FaqsContent} from "~/components/faq-card.component";

const SFaq = styled.section`
  margin-bottom: 2.5em;

  .faq {
    &__title {
      margin: 1.5em 0;
      text-align: center;
    }

    &__card-container {
      max-width: 1076px;
      margin: 0 auto;
    }

    &__email {
      &-container {
        margin-top: 8em;
        text-align: center;
      }

      &-text {
        margin: 0;
      }

      &-link {
        text-decoration: none;
        color: var(--primary-base);
        cursor: pointer;
        font-size: 1em;
      }
    }
  }
`
const faqs: FaqsContent[] = [
    {
        question: "¿Cómo funciona la consulta en línea?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus quis purus condimentum venenatis vitae a erat. Ut luctus vulputate lorem, vitae consequat leo commodo nec."
    },
    {
        question: "¿Cómo funciona la plataforma?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus quis purus condimentum venenatis vitae a erat. Ut luctus vulputate lorem, vitae consequat leo commodo nec."
    },
    {
        question: "¿Cuáles son los pasos para tomar una decisión?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus quis purus condimentum venenatis vitae a erat. Ut luctus vulputate lorem, vitae consequat leo commodo nec."
    },
    {
        question: "Me da ansiedad pedir un turno",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        question: "Sobre los profesionales",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus quis purus condimentum venenatis vitae a erat. Ut luctus vulputate lorem, vitae consequat leo commodo nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus quis purus condimentum venenatis vitae a erat. Ut luctus vulputate lorem, vitae consequat leo commodo nec."
    }
]

const Faq = () => {
    return (
        <SFaq>
            <h1 className="faq__title"> ¿Cómo podemos ayudarte? </h1>
            <div className="faq__card-container">
                {faqs.map((faqInfo, index)=>(
                    <FaqCardComponent key={index} faq={faqInfo}/>
                ))}
            </div>
            <div className="faq__email-container">
                <p className="faq__email-text"> Si aún tienes dudas </p>
                <a className="faq__email-link" href=""> info@lamenteesmaravillosa.com </a>
            </div>
        </SFaq>
    );
};

export default Faq;
