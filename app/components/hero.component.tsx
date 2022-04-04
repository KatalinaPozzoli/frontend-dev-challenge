import React, {useState} from 'react';
import styled from "styled-components";

const HeroItem = styled.li<{ imageURL: string, index: number, position: number }>`
  height: 296px;
  width: 100%;
  background-image: ${props => `url(${props.imageURL})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateX(${props => 100 * (props.index - props.position)}%);
  transition: transform .3s;

  @media screen and (min-width: 1024px) {
    height: 575px;
  }
`
const SHero = styled.section`
  position: relative;

  .hero {
    &__list {
      height: 296px;
      margin: 0;
      list-style: none;
      padding: 0;
      position: relative;
      overflow: hidden;
      @media screen and (min-width: 1024px) {
        height: 575px;
      }

      &-item {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    &__text-container{
      position: absolute;
      bottom: 1.5em;
      left: 1em;
      margin: 0;
      display: flex;
      flex-direction: column;
      color: white;
      text-align: left;
      
      @media screen and (min-width: 1024px) {
        bottom: 5em;
        left: 12.5em;
      }
    }
    &__title {
      font-size: 1.5em;
      margin: 0;
      @media screen and (min-width: 1024px) {
        margin-bottom: 0.5em;
        font-size: 2.5em;
        width: 440px;
        line-height: 40px;
      }
    }

    &__sub-title {
      display: none;
      @media screen and (min-width: 1024px) {
        display: flex;
        font-size: 1.5em;
        margin-top: 0;
        margin-bottom: 2.5em;
      }
    }

    &__button {
      display: none;
      @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 166px;
        background-color: var(--primary-base);
        color: white;
        height: 40px;
        border: none;
        border-radius: 4px;
        font-family: var(--font-heading);
        font-weight: 700;
        font-size: 1em;
      }
    }
  }
`

const imagesBanner = [
    {
        image: "/assets/image-1.png",
        title: "Vive el ahora, disfruta cada momento",
    },
    {
        image: "/assets/image-2.png",
        title: "Tu primer paso hacia el bienestar emocional",
    },
    {
        image: "/assets/image-3.png",
        title: "Conviértete en la persona que quieres ser",
    }
]
const HeroComponent = () => {
    const [position, setPosition] = useState(0)
    return (
        <SHero>
            <ul className="hero__list">
                {imagesBanner.map((heroNode, index) => (
                    <HeroItem
                        onClick={() => setPosition(position + 1)}
                        className="hero__list-item" key={`hero-node__${index}`}
                        imageURL={heroNode.image} index={index} position={position}
                    >
                        <div className="hero__text-container">
                            <h1 className='hero__title'> {heroNode.title} </h1>
                            <h2 className='hero__sub-title'> Conoce nuestro profesionales con licencia </h2>
                            <button className='hero__button'> Explorar </button>
                        </div>
                    </HeroItem>
                ))
                }
            </ul>
        </SHero>
    );
};

export default HeroComponent;
