import React, {useState} from 'react';
import styled from "styled-components";
import quoteIcon from '../../public/assets/bxs-quote-right.png'

const TestimonialItem = styled.li<{index: number, position: number }>`
  height: 375px;
  width: 100%;
  transform: translateX(${props => 100 * (props.index - props.position)}%);
  transition: transform .3s;
`

const STestimonials = styled.blockquote`
  position: relative;
  .testimonial {
    &__list {
      height: 375px;
      list-style: none;
      padding: 0;
      margin: 0;
      position: relative;
      overflow: hidden;
      &-item{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    &__quote-icon {
      margin: 0;
      padding: 0;
    }

    &__quote {
      font-style: italic;
      color: #414141;
      margin: 8px 0;
      text-align: center;
    }

    &__author {
      font-weight: 700;
      font-style: normal;
    }
  }
`

const testimonials = [
    {
        quote: "Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo",
        author: "~ Maria Montessori ~"
    },
    {
        quote: "En lo personal opino que es una excelente aplicación, la psicologa que me atendió fue como una amiga que nos ayuda a sentirnos mejor, que nos apoya y nos escucha, me ha ayudado mucho, excelente servicio",
        author: "~ Raquel Rodríguez ~"
    },
    {
        quote: "Me ha ayudado bastante con los pensamientos que llegó a tener, estaba a punto de rendirme, y luego conocí la app,  he mejorado mi perspectiva de vida y de todo",
        author: "~ Julian Gomez ~"
    }
]

const TestimonialsComponent = () => {
    const [position, setPosition] = useState(0)
    return (
        <STestimonials>
            <ul className="testimonial__list">
                {testimonials.map((testimonial, index) => (
                    <TestimonialItem onClick={() => setPosition(position + 1)}
                                     className="testimonial__list-item"
                                     key={`testimonial__${index}`}
                                     index={index}
                                     position={position}>
                        <img className="testimonial__quote-icon" src={quoteIcon} alt="quoteIcon"/>
                        <p className="testimonial__quote">{testimonial.quote}</p>
                        <footer>
                            <cite className="testimonial__author"> {testimonial.author} </cite>
                        </footer>
                    </TestimonialItem>
                ))}
            </ul>

        </STestimonials>
    );
};

export default TestimonialsComponent;
