import styled from "styled-components";
const MenuWrapper = styled.div`
  width: 375px;
  height: 600px;
  background-color: #070724;
  color: #fff;
  list-style-type: style none;
  position: absolute;
  left: 462px;
  top: 70px;
`;

const PlanetNameWrapper = styled.div`
  /* width:375px;
height:1px; */
  margin-top: 44px;
  /* border-top:1px solid #fff */
`;
const MenuPlanetName = styled.div`
  width: 91px;
  height: 25px;
  font-family: Spartan;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1.36px;
  color: #fff;
  margin: 44px 179px 20px 69px;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    
  }

  img {
    margin-left: 8px;
  }
`;
const Line = styled.div``;

export { MenuWrapper, PlanetNameWrapper, MenuPlanetName };
