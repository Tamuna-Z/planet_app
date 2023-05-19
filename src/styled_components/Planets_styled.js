import styled from "styled-components";
const Container=styled.div`
width:375px;
height:950px;
background-color:#070724;
`;
const OverviewContainer=styled.div`
display:flex;
width:100%;
justify-content:space-around;
align-items:center;

border-top:1px solid #fff;
border-bottom:1px solid #fff;
`;

const View=styled.h3`
width:80px;
height:10px;
color:#fff;
font-family:Spartan;
font-weight:700;
font-size:9px;
line-height:10.08px;
letter-spacing:1.93px;
align-items:center;
margin:20px 24px 20px 24px;
`;
const MercuryImg=styled.img`
width:111px;
height:111px;
/* opacity: 7.76%; */
margin:95px 131.62px 98px 131px;

`;
const PlanetName=styled.h1`
width:132px;
height:52px;
font-family:Spartan;
font-weight:400;
font-size:40px;
line-height:51.76px;
align-items:center;
color:#ffffff;
margin: 0px 121.5px 16px 121.5px;
`;
const PlanetContent=styled.h1`
width:327px;
font-family:Spartan;
font-weight:400;
font-size:11px;
line-height:22px;
align-items:center;
color:#ffffff;
margin: 0px 24px 32px 24px;

`;


export{Container,OverviewContainer,View,MercuryImg,PlanetName,PlanetContent}