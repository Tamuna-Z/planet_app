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
  TimeAndTempContainer,
  Rotation,
  RoTime,
  Days,
} from "../styled_components/Planets_styled";
import Mercury from "../../public/assets/planet-mercury.svg";

function Planet({ planetIndex, setPlanetIndex, color, setColor }) {
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
          <View
            style={
              activeInfo === "OVERVIEW"
                ? { borderBottom: `2px solid ${planetInfo.color}` }
                : {}
            }
            onClick={() => setActiveInfo("OVERVIEW")}
          >
            OVERVIEW
          </View>
          <View
            style={
              activeInfo === "STRUCTURE"
                ? { borderBottom: `2px solid ${planetInfo.color}` }
                : {}
            }
            onClick={() => setActiveInfo("STRUCTURE")}
          >
            STRUCTURE
          </View>
          <View
            style={
              activeInfo === "SURFACE"
                ? { borderBottom: `2px solid ${planetInfo.color}` }
                : {}
            }
            onClick={() => setActiveInfo("SURFACE")}
          >
            SURFACE
          </View>
        </OverviewContainer>
        <MercuryImg src={Mercury} />
        <PlanetName>{planetNameUpperCase}</PlanetName>
        <PlanetContent>{planetInfo[activeInfo.toLowerCase()]?.content}</PlanetContent>
        <Wiki href={planetInfo[activeInfo.toLowerCase()]?.source}>source:wikipedia</Wiki>
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
