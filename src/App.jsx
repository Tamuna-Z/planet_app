// import { useState } from 'react'
import GlobalStyled from "./styled_components/Global.styled";
import { Routes, Route } from "react-router-dom";
import Planet from "./pages/Planet";
import { useEffect ,useState} from "react";
import Home from "./pages/Home";
import Header from './components/Header';

function App() {
  const [planetIndex, setPlanetIndex] = useState(0);
  const [color, setColor] = useState("#419EBB");
  return (
    <>
      <GlobalStyled />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:planet" element={<Planet />} />
      </Routes>
    </>
  );
}

export default App;
