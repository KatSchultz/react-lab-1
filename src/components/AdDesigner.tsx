import "./AdDesigner.css";
import { useState } from "react";
import Ad from "./ad";

function AdDesigner() {
  const [flavor, setFlavor] = useState("Chocolate");
  const [colorTheme, setColorTheme] = useState("Light");
  const [fancyFontSize, setFancyFontSize] = useState(40);

  const fontStyle = {
    fontSize: fancyFontSize + "px",
  };

  return (
    <div className="choices">
      {/* <div className="Ad-holder">
        <Ad flavor="Chocolate" fontSize={50} darkTheme />
        <Ad flavor="Vanilla" fontSize={30} darkTheme={false} />
        <Ad flavor="Strawberry" fontSize={60} darkTheme />
      </div> */}
      <h2>Ad Designer</h2>
      <Ad
        flavor={flavor}
        fontSize={fancyFontSize}
        darkTheme={colorTheme === "Dark"}
      />
      {/* <div className="ad-display">
        <div className={`${colorTheme} flavor-display`}>
          <p>Vote For</p>
          <h2 style={fontStyle} className="flavor-fancy">
            {flavor}
          </h2>
        </div>
      </div> */}
      <div className="flavor-choice">
        <h3 className="flavor-title">What to Support</h3>
        <div className="chocolate">
          <button
            disabled={flavor === "Chocolate"}
            onClick={() => setFlavor("Chocolate")}
            className="btn-chocolate"
          >
            Chocolate
          </button>
        </div>

        <div className="vanilla">
          <button
            disabled={flavor === "Vanilla"}
            onClick={() => setFlavor("Vanilla")}
            className="btn-vanilla"
          >
            Vanilla
          </button>
        </div>
        <div className="strawberry">
          <button
            disabled={flavor === "Strawberry"}
            onClick={() => setFlavor("Strawberry")}
            className="btn-strawberry"
          >
            Strawberry
          </button>
        </div>
      </div>

      <div className="color-choice">
        <h3 className="color-theme">Color Theme</h3>
        <div className="color-btns">
          <button
            disabled={colorTheme === "Light"}
            onClick={() => setColorTheme("Light")}
            className="light"
          >
            Light
          </button>
          <button
            disabled={colorTheme === "Dark"}
            onClick={() => setColorTheme("Dark")}
            className="dark"
          >
            Dark
          </button>
        </div>
      </div>
      <div className="font-size-choice">
        <h3 className="font-title">Font Size</h3>
        <div className="font-size-buttons">
          <button
            onClick={() => setFancyFontSize((size) => size - 1)}
            className="font-down"
          >
            Down
          </button>
          <div className="width-display">{fancyFontSize}</div>
          <button
            onClick={() => setFancyFontSize((size) => size + 1)}
            className="font-up"
          >
            Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdDesigner;
