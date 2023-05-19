import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json';
import {Container, OverviewContainer,View,MercuryImg,PlanetName,PlanetContent} from '../styled_components/Planets_styled';
import Mercury from '../../public/assets/planet-mercury.svg';

function Planet() {
  const params=useParams();
  const planetInfo=data.find((item)=>item.name.toLowerCase()==params.planet)
  console.log(planetInfo);
  return (
    <>
   <Container>
   <OverviewContainer>
      <View>OVERVIEW</View>
      <View>STRUCTURE</View>
      <View>SURFACE</View>
    </OverviewContainer>
    <MercuryImg src={Mercury}/>
    <PlanetName>{planetInfo.name}</PlanetName>
    <PlanetContent>{planetInfo.overview.content}</PlanetContent>

   </Container>
   
    </>
  )
}

export default Planet