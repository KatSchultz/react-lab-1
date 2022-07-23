import React from "react";
import "./ad.css";
import { useState } from "react";

interface AdProps {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
}

function Ad({ flavor, fontSize, darkTheme }: AdProps) {
  const fontStyle = {
    fontSize: fontSize + "px",
  };
  console.log(flavor);
  let theme = "";
  if (darkTheme) theme = "dark-theme";

  return (
    <section>
      <div className={`ad-holder ${theme}`}>
        <p>Vote for</p>
        <h2>{flavor}</h2>
      </div>
    </section>
  );
}

export default Ad;

// <div className="ad-holder">
//   <div className="ad-display">
//     <div>
//       <p>Vote For</p>
//       <h2 style={fontStyle} className="flavor-fancy">
//         {flavor}
//       </h2>
//     </div>
//   </div>
// </div>;
