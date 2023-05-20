import React from 'react';
import burgerImg from '../../public/assets/icon-hamburger.svg';
import {HeaderContainer,Tittle} from '../styled_components/Header.styled'

function Header() {
  return (
    <div>
       
        <HeaderContainer>
        <Tittle>THE PLANETS</Tittle><img src={burgerImg}/></HeaderContainer>
    </div>
  )
}

export default Header