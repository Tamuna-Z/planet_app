import React from 'react';
import burgerImg from '../../public/assets/icon-hamburger.svg';
import {HeaderContainer,Tittle} from '../styled_components/Header.styled';
import Menu from '../components/Menu';
import { useState } from 'react';

function Header() {
  const [isShown,setIsShown]=useState(false);
  const toggleMenu = () => {
    setIsShown(!isShown);
  };
  return (
    <div>
        {isShown && <Menu />}
        <HeaderContainer>
        <Tittle>THE PLANETS</Tittle><img src={burgerImg} onClick={toggleMenu}
        /></HeaderContainer>
    </div>
  )
}

export default Header