import React from "react";
import {
  MenuWrapper,
  PlanetNameWrapper,
  MenuPlanetName,
} from "../styled_components/Menu.styled";
import PlanetData from "../../data.json";
import Icon from "../../public/assets/icon-chevron.svg";

function Menu() {
  return (
    <>
      <MenuWrapper>
        <PlanetNameWrapper>
          <MenuPlanetName>
            <div>
              <img />
            </div>
            {PlanetData.map((planet, index) => (
              <div key={index} index={index}>
               
                <div
                  style={{
                    backgroundColor: planet.color,
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                  }}
                  
                ></div>
                {planet.name}
              </div>
            ))}
          </MenuPlanetName>
        </PlanetNameWrapper>
      </MenuWrapper>
    </>
  );
}

export default Menu;
