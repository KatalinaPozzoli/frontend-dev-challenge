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
`
const SHero = styled.section`
  position: relative;
  .hero {
    &__list {
      height: 296px;
      list-style: none;
      padding: 0;
      position: relative;
      overflow: hidden;
      &-item {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    &__title {
      font-size: 2em;
      text-align: left;
      position: absolute;
      bottom: 1em;
      left: 0.5em;
      color: white;
      margin: 0;
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
                            <h1 className='hero__title'> {heroNode.title} </h1>
                        </HeroItem>
                    ))
                }
            </ul>
        </SHero>
    );
};

export default HeroComponent;
