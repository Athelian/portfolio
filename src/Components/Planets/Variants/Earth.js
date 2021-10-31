import Planet from "Components/Planets/Planet";
import React from "react";
import PlanetProperties from "../PlanetProperties";
import "./Earth.sass";

console.log(PlanetProperties);

const Earth = () => (
  <div>
    <Planet variant="earth">
      {Object.keys(PlanetProperties["earth"]).map((island) => (
        <div className={"island" + ` island--${island}`} key={island}>
          {Array(parseInt(PlanetProperties["earth"][island]["layers"]) - 1) // -1 as the final layer has no width or height
            .fill("")
            .map((_, i) => (
              <div className="plate" key={i}>
                <div className="land__window">
                  {Array(
                    parseInt(PlanetProperties["earth"][island]?.["components"] || 1)
                  )
                    .fill("")
                    .map((_, i) => (
                      <div className="land" key={i} />
                    ))}
                </div>
              </div>
            ))}
        </div>
      ))}
    </Planet>
  </div>
);

export default Earth;
