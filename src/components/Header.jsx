import React from 'react';
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
        {isShown && <Menu setIsShown={setIsShown}/>}
        <HeaderContainer>
        <Tittle>THE PLANETS</Tittle>
        <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
         
        </HeaderContainer>
    </div>
  )
}

export default Header