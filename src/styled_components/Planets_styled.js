import styled from "styled-components";
const Container=styled.div`
width:375px;
height:900px;
/* background-color:#070724; */
`;
const OverviewContainer=styled.div`
display:flex;
width:100%;
justify-content:space-around;
align-items:center;

border-top:1px solid #fff;
border-bottom:1px solid #fff;
`;

const View=styled.li`
/* width:80px; */
/* height:10px; */
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
font-family: Antonio, sans-serif;
font-weight:400;
font-size:40px;
line-height:51.76px;
align-items:center;
color:#ffffff;
margin: 0px 121.5px 16px 121.5px;
`;
const PlanetContent=styled.p`
width:327px;
height:110px;
font-family: 'League Spartan', sans-serif;
font-weight:400;
font-size:11px;
line-height:22px;
text-align:center;
color:#ffffff;
margin: 0px 24px 0px 24px;

`;
const Wiki=styled.p`
width:123px;
height:25px;
font-family: Spartan;
font-weight:700;
font-size:12px;
line-height:25px;
/* align-items:center; */
color:#ffffff;
Opacity:50%;
margin: 0px 135px 28px 117px;
`;
const TimeAndTempContainer=styled.div`
width:327px;
height:216px;
margin:0px 24px 47px 24px;



`;
const Rotation =styled.div`
width:327px;
height:48px;
mix-blend-mode: normal;
border: 2px solid rgba(255, 255, 255, 0.5);
display:flex;
justify-content: space-around;
align-items: center;
margin-bottom:8px;
`;
const RoTime=styled.p`
width:80px;
height:16px;
font-family: Spartan;
font-weight:700;
font-size:8px;
line-height:16px;
letter-spacing:0.73px;
text-transform: uppercase;
align-items:center;
color:#ffffff;
mix-blend-mode: normal;
opacity: 0.5;
/* padding: 16px 0px 16px 24px; */


`;
const Days=styled.p`
width:125px;
height:26px;
font-family: Antonio;
font-weight:400;
font-size:20px;
line-height:25.88px;
letter-spacing:-0.75px;
text-transform: uppercase;
align-items:right;
color:#ffffff;


/* padding: 9px 24px 13px 0px; */

`;


export{Container,OverviewContainer,View,MercuryImg,PlanetName,PlanetContent,Wiki,TimeAndTempContainer,Rotation,RoTime,Days}