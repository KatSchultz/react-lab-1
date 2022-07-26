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
        <div className="Ad-holder">
          <Ad flavor="Chocolate" fontSize={50} darkTheme />
          <Ad flavor="Vanilla" fontSize={30} darkTheme={false} />
          <Ad flavor="Strawberry" fontSize={60} darkTheme />
        </div>
        <div className="lower-content">
          <AdDesigner />
          <Votes />
        </div>
      </div>
    </div>
  );
}

export default App;
