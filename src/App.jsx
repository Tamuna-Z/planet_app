// import { useState } from 'react'
import GlobalStyled from "./styled_components/Global.styled";
import { Routes, Route } from "react-router-dom";
import Planet from "./pages/Planet";
import { useEffect } from "react";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:planet" element={<Planet />} />
      </Routes>
    </>
  );
}

export default App;
