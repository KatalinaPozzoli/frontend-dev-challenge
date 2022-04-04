import React, {useState} from 'react';
import styled from "styled-components";
import HamburgerMenu from '../../public/assets/bx-menu.svg';
import CloseHamburgerMenu from '../../public/assets/bx-x.png';
import SearchMenu from '../../public/assets/bx-search.svg';
import BrandLogo from '../../public/assets/brandLogo.png'

const SNavigationBar = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 0.5em;
  margin: 0;

  .nav-bar {
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (min-width: 1024px) {
        max-width: 1076px;
        margin: 0 auto;
      }
    }

    &__menu-icon, &__search-button {
      border: none;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
      cursor: pointer;
    }

    &__hamburger-menu-icon, &__close-menu-icon {
      width: 50px;
      height: 40px;
    }

    &__hamburger-menu-icon {
      display: flex;

      &--opened {
        display: none;
      }
    }

    &__close-menu-icon {
      display: none;

      &--opened {
        display: flex;
      }
    }

    &-sections {
      &__container {
        display: none;

        &--opened {
          margin: 0;
          padding: 1em;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          list-style: none;
          gap: 1em;

          @media screen and (min-width: 1024px) {
            max-width: 1076px;
            margin: 0 auto;
          }
        }
      }

      &__section {
        margin: 0;
        border-bottom: solid 1px #E4E4E4;

        a {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.5em;
          text-decoration: none;
          color: var(--primary-base);
        }
      }
    }

  }

`
const menuSections = [
    {
        label: 'Inicio',
        link: '/'
    },
    {
        label: 'Testimonios',
        link: '#testimonials'
    },
    {
        label: 'Preguntas frecuentes',
        link: 'faq'
    },
    {
        label: 'Newsletter',
        link: '#newsletter'
    },
]

const NavigationBarComponent = () => {
    const [opened, setOpened] = useState(false)
    return (
        <SNavigationBar>
            <div className="nav-bar__container">
                <button className="nav-bar__menu-icon" onClick={() => setOpened(!opened)}>
                    <img
                        className={`nav-bar__hamburger-menu-icon ${opened ? 'nav-bar__hamburger-menu-icon--opened' : ''}`}
                        src={HamburgerMenu} alt="Hamburger Menu Icon"/>
                    <img className={`nav-bar__close-menu-icon ${opened ? 'nav-bar__close-menu-icon--opened' : ''}`}
                         src={CloseHamburgerMenu} alt="Close Menu Icon"/>
                </button>
                <img className="nav-bar__brand-logo" src={BrandLogo} alt="Brand Logo"/>
                <button className="nav-bar__search-button">
                    <img src={SearchMenu} alt="Search Icon"/>
                </button>
            </div>
            <ul className={`nav-bar-sections__container ${opened ? 'nav-bar-sections__container--opened' : ''}`}>
                {menuSections.map((link, index) => (
                    <li className="nav-bar-sections__section" key={index}>
                        <a href={link.link} onClick={() => setOpened(!opened)}> {link.label}</a>
                    </li>
                ))}
            </ul>
        </SNavigationBar>
    );
};

export default NavigationBarComponent;
