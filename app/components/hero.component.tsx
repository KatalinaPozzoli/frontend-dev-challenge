import React, {FunctionComponent, useEffect, useState} from 'react';
import styled from "styled-components";

export interface Banner {
    image: string,
    title: string
}

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

    &__text-container {
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
      @media screen and (min-width: 1920px) {
        bottom: 5em;
        left: 27em;
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

const nextPosition = (banners: Banner[]) => (prevPosition: number) => {
    const newPos = prevPosition + 1
    return newPos >= banners.length ? 0 : newPos
}

const HeroComponent: FunctionComponent<{ banners: Banner[] }> = ({banners}) => {
    const [position, setPosition] = useState(0)

    useEffect(() => {
        setInterval(() => setPosition(nextPosition(banners)), 5000)
    }, [])

    return (
        <SHero>
            <ul className="hero__list">
                {banners.map((heroNode, index) => (
                    <HeroItem
                        className="hero__list-item" key={`hero-node__${index}`}
                        imageURL={heroNode.image} index={index} position={position}
                    >
                        <div className="hero__text-container">
                            <h1 className='hero__title'>{heroNode.title}</h1>
                            <h2 className='hero__sub-title'>Conoce nuestro profesionales con licencia</h2>
                            <button className='hero__button'>Explorar</button>
                        </div>
                    </HeroItem>
                ))
                }
            </ul>
            <nav className="hero-navigation">
                <ul className="hero-navigation__list-container">
                    {banners.map((banner, index) =>
                        <li className={`
                            hero-navigation__item
                            ${index === position ? 'hero-navigation__item--selected' : ''}
                        `} key={`hero-node__${index}`}>
                            <button onClick={() => setPosition(index)} aria-label={banner.title}></button>
                        </li>
                    )}
                </ul>
            </nav>
        </SHero>
    );
};

export default HeroComponent;
