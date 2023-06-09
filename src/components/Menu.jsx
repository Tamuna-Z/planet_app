import React, { useState } from "react";
import {
  MenuWrapper,
  PlanetNameWrapper,
  MenuPlanetName,
} from "../styled_components/Menu.styled";
import PlanetData from "../../data.json";
import { Link } from "react-router-dom";

function Menu() {
  const[planetsMenu,setPlanetsMenu]=useState('Mercury');
  return (
    <>
      <MenuWrapper>
        <PlanetNameWrapper>
          <MenuPlanetName>
            <div>
              <img />
            </div>
            {PlanetData.map((planet, index) => (
              <Link key={index} to={`/${planet.name.toLowerCase()}`}
              onClick={()=>{
                setPlanetsMenu(planet)}}
                style={planet == planetsMenu ? {backgroundColor:planet.color}: {}}
              >
                <div
                  style={{
                    backgroundColor: planet.color,
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                  }}
                 
                ></div>
                {planet.name}
              </Link>
            ))}
          </MenuPlanetName>
        </PlanetNameWrapper>
      </MenuWrapper>
    </>
  );
}

export default Menu;
