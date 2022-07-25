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
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
