import React from 'react';
import styled from "styled-components";
import FaqCardComponent from "~/components/faq-card.component";

const SFaq = styled.section`
`

const Faq = () => {
    return (
        <SFaq>
            <h1> ¿Cómo podemos ayudarte? </h1>
            <FaqCardComponent/>
        </SFaq>
    );
};

export default Faq;
