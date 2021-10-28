import Planet from "Components/Planets/Planet";
import React from "react";
import PlanetProperties from "../PlanetProperties";
import "./Earth.sass";

const Earth = () => (
  <div>
    <Planet variant="earth">
      {Object.keys(PlanetProperties["earth"]).map((island) => (
        <div
          className={
            "island" +
            ` island--${island}` +
            ` island--rotate-z-${PlanetProperties["earth"][island]["rotation"]}deg`
          }
        >
          {Array(parseInt(PlanetProperties["earth"][island]["layers"]) - 1) // -1 as the final layer has no width or height
            .fill("")
            .map((_, i) => (
              <div className="plate" key={i}>
                <div className="land__window">
                  <div className="land" />
                </div>
                <div className="land__window">
                  <div className="land land--rotated" />
                </div>
              </div>
            ))}
        </div>
      ))}
    </Planet>
  </div>
);

export default Earth;
