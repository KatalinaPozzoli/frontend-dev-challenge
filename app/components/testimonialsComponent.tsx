import React, {FunctionComponent, useEffect, useState} from 'react';
import styled from "styled-components";
import quoteIcon from '../../public/assets/bxs-quote-right.png'

export interface Testimonials {
    quote: string,
    author: string
}

const TestimonialItem = styled.li<{ index: number, position: number }>`
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

      &-item {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      @media screen and (min-width: 1024px) {
        max-width: 1076px;
        margin: 0 auto;
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

    &-navigation {
      &__list-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
        margin-top: 0.5em;
      }

      &__item {
        button {
          width: 0.75em;
          height: 0.75em;
          padding: 0;
          border-radius: 50%;
          border: none;
          background-color: #CACACA;
          transition: background .3s;
        }

        &--selected {
          button {
            background-color: #696969;
          }

        }
      }
    }
  }

`

const nextPosition = (testimonials: Testimonials[]) => (prevPosition: number) => {
    const newPos = prevPosition + 1
    return newPos >= testimonials.length ? 0 : newPos
}

const TestimonialsComponent: FunctionComponent<{ testimonials: Testimonials[] }> = ({testimonials}) => {
    const [position, setPosition] = useState(0)

    useEffect(() => {
        setInterval(() => setPosition(nextPosition(testimonials)), 5000)
    }, [])

    return (
        <STestimonials id="testimonials">
            <ul className="testimonial__list">
                {testimonials.map((testimonial, index) => (
                    <TestimonialItem
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
            <nav className="testimonial-navigation">
                <ul className="testimonial-navigation__list-container">
                    {testimonials.map((quote, index) =>
                        <li className={`
                            testimonial-navigation__item
                            ${index === position ? 'testimonial-navigation__item--selected' : ''}
                        `} key={`testimonial__${index}`}>
                            <button onClick={() => setPosition(index)} aria-label={quote.quote}></button>
                        </li>
                    )}
                </ul>
            </nav>
        </STestimonials>
    );
};

export default TestimonialsComponent;
