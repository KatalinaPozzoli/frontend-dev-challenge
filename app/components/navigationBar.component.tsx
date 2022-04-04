import React from 'react';
import styled from "styled-components";
import HamburgerMenu from '../../public/assets/bx-menu.svg';
import SearchMenu from '../../public/assets/bx-search.svg';
import BrandLogo from '../../public/assets/brandLogo.png'

const SNavigationBar = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 0.5em;
  margin: 0;
  .nav-bar{
    &__container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (min-width: 1024px){
        max-width: 1076px;
        margin: 0 auto;
      }
    }
    &__hamburger-menu, &__search-button{
      border: none;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
      cursor: pointer;
    }
  }

`
const NavigationBarComponent = () => {
    return (
        <SNavigationBar>
            <div className="nav-bar__container">
                <button className="nav-bar__hamburger-menu">
                    <img src={HamburgerMenu} alt="Hamburger Menu Icon"/>
                </button>
                <img className="nav-bar__brand-logo" src={BrandLogo} alt="Brand Logo"/>
                <button className="nav-bar__search-button">
                    <img src={SearchMenu} alt="Search Icon"/>
                </button>
            </div>
        </SNavigationBar>
    );
};

export default NavigationBarComponent;
