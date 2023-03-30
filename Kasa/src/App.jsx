import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import Grille from "./components/Grille.jsx";
import Main from "./components/Main.jsx";


function App() {
  return (
    <div>
      <Navbar/>
      <Main>
      <Banner/>
      <Grille/>
      </Main>
    </div>
  );
}

export default App