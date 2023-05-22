import React from 'react';
import{MenuWrapper,PlanetNameWrapper ,MenuPlanetName} from '../styled_components/Menu.styled';
import PlanetData from '../../data.json';

function Menu() {
  return (
    <>
    <MenuWrapper>
        <PlanetNameWrapper>
            <MenuPlanetName>{PlanetData.map((planet,index)=>(
                <li key ={index}>{planet.name}</li>

            ))}</MenuPlanetName>
        </PlanetNameWrapper>

    </MenuWrapper>
    </>
  )
}

export default Menu;