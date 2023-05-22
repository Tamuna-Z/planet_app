import React from "react";
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


function Planet() {
  const params = useParams();
  const planetInfo = data.find(
    (item) => item.name.toLowerCase() == params.planet
  );
  const planetNameUpperCase = planetInfo.name.toUpperCase();
  
  return (
    <>
      <Container>
        
        <OverviewContainer>
          <View>OVERVIEW</View>
          <View>STRUCTURE</View>
          <View>SURFACE</View>
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
