import { useState } from "react";
import "./Votes.css";

function Votes() {
  const [flav1, setFlav1] = useState(0);
  const [flav2, setFlav2] = useState(0);
  const [flav3, setFlav3] = useState(0);

  function votePercent(flavor: number) {
    if (flav1 + flav2 + flav3 === 0) return 0;
    return Math.floor((flavor / (flav1 + flav2 + flav3)) * 100);
  }
  const flav1Styles = {
    width: votePercent(flav1) + "%",
    backgroundColor: "brown",
  };
  const flav2Styles = {
    width: votePercent(flav2) + "%",
    backgroundColor: "white",
    border: "1px solid black",
  };
  const flav3Styles = {
    width: votePercent(flav3) + "%",
    backgroundColor: "pink",
  };

  return (
    <div className="votes">
      <h2>Vote Here</h2>
      <div className="vote-btns">
        <button onClick={() => setFlav1((x) => x + 1)} className="flav1">
          Chocolate{flav1}
        </button>
        <button onClick={() => setFlav2((x) => x + 1)} className="flav2">
          Vanilla{flav2}
        </button>
        <button onClick={() => setFlav3((x) => x + 1)} className="flav3">
          Strawberry{flav3}
        </button>
      </div>

      <div className="bar-graph">
        {flav1 + flav2 + flav3 === 0 && <h3>No votes yet</h3>}
        {flav1 > 0 && (
          <div>
            <h3 className="vote-display">Chocolate {votePercent(flav1)}%</h3>{" "}
            <div style={flav1Styles} className="flav-bar flav1-bar"></div>
          </div>
        )}
        {flav2 > 0 && (
          <div>
            <h3 className="vote-display">Vanilla {votePercent(flav2)}%</h3>
            <div style={flav2Styles} className="flav-bar flav2-bar"></div>
          </div>
        )}
        {flav3 > 0 && (
          <div>
            <h3 className="vote-display">Strawberry {votePercent(flav3)}%</h3>
            <div style={flav3Styles} className="flav-bar flav3-bar"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Votes;
