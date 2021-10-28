import Planet from "Components/Planets/Planet";
import React from "react";
import VARIABLES from "../../../_variables.module.sass";
import PlanetProperties from "../PlanetProperties";
import "./Earth.sass";

const { LAYERS_PER_ISLAND } = VARIABLES;

console.log(PlanetProperties)

const Earth = () => {
  return (
    <div>
      <Planet variant="earth">
        <div
          className={"island" + ` island--africa` + ` island--rotate-z-${0}deg`}
        >
          {Array(parseInt(LAYERS_PER_ISLAND) - 1) // -1 as the final layer has no width or height
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
        {/* <div
          className={
            "island" +
            ` island--europe` +
            ` island--rotate-z-${0}deg`
          }
        >
          {Array(parseInt(LAYERS_PER_ISLAND) - 1) // -1 as the final layer has no width or height
            .fill("")
            .map((_, i) => (
              <div
                className="plate"
                key={i}
                style={
                  i < 20
                    ? { contentVisibility: "hidden" }
                    : null
                }
              >
                <div className="land" />
              </div>
            ))}
        </div> */}
      </Planet>
    </div>
  );
};

export default Earth;
