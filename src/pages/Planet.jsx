import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import {
  Container,
  OverviewContainer,
  View,
  MercuryImg,
  PlanetName,
  PlanetContent,
  Wiki,
  TimeAndTempContainer,Rotation,RoTime,Days
} from "../styled_components/Planets_styled";
import Mercury from "../../public/assets/planet-mercury.svg";


function Planet({planetIndex, setPlanetIndex,color, setColor}) {
  const params = useParams();
  
  const planetInfo = data.find(
    (item) => item.name.toLowerCase() == params.planet
  );
  const planetNameUpperCase = planetInfo.name.toUpperCase();

  const [activeInfo, setActiveInfo] = useState("OVERVIEW");
   
  return (
    <>
      <Container>
        
        <OverviewContainer>
          <View  style={{
                borderBottom: `2px solid ${
                  activeInfo === "OVERVIEW" ? color : "transparent"
                }`,
              }}
              onClick={() => setActiveInfo("OVERVIEW")}>OVERVIEW</View>
          <View style={{
                borderBottom: `2px solid ${
                  activeInfo === "STRUCTURE" ? color : "transparent"
                }`,
              }}
              onClick={() => setActiveInfo("OVERVIEW")}
          >STRUCTURE</View>
          <View style={{
                borderBottom: `2px solid ${
                  activeInfo === "SURFACE" ? color : "transparent"
                }`,
              }}
              onClick={() => setActiveInfo("OVERVIEW")}>SURFACE</View>
        </OverviewContainer>
        <MercuryImg src={Mercury} />
        <PlanetName>{planetNameUpperCase}</PlanetName>
        <PlanetContent>{planetInfo.overview.content}</PlanetContent>
        <Wiki>
          Source : Wikipedia
        </Wiki>
        <TimeAndTempContainer>
          <Rotation>
            <RoTime>ROTATION TIME</RoTime>
            <Days>{planetInfo.rotation}</Days>
          </Rotation>
          <Rotation>
            <RoTime>Revolution TIME</RoTime>
            <Days>{planetInfo.revolution}</Days>
          </Rotation>
          <Rotation>
            <RoTime>Radius</RoTime>
            <Days>{planetInfo.radius}</Days>
          </Rotation>
          <Rotation>
            <RoTime>Average Temp</RoTime>
            <Days>{planetInfo.temperature}</Days>
          </Rotation>

        </TimeAndTempContainer>
      </Container>
    </>
  );
}

export default Planet;
