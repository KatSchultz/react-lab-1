import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import Votes from "./components/Votes";
import Ad from "./components/ad";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header user="IceCreamLover" />
        <Ad flavor="Chocolate" fontSize={40} darkTheme />
        <Ad flavor="Vanilla" fontSize={40} darkTheme={false} />
        <Ad flavor="Strawberry" fontSize={40} darkTheme />
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
