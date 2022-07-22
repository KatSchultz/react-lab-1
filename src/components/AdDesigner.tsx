import "./AdDesigner.css";
import { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function AdDesigner() {
  const [flavor, setFlavor] = useState("Chocolate");
  const [colorTheme, setColorTheme] = useState("Light");

  return (
    <div className="choices">
      <h2>Ad Designer</h2>
      <div className="flavor-choice">
        <div className={`${colorTheme} flavor-display`}>
          <p>Vote For</p>
          <h2 className="flavor-fancy">{flavor}</h2>
        </div>
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
        <h2 className="color-theme">Color Theme</h2>
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
    </div>
  );
}

export default AdDesigner;
