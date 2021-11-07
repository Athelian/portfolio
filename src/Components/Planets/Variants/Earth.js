import Planet from "Components/Planets/Planet";
import React from "react";
import PlanetProperties from "../PlanetProperties";
import "./Earth.sass";
import VARIABLES from "../../../_variables.module.sass";

console.log(PlanetProperties)
console.log(VARIABLES)

const Earth = () => (
  <div className="earth">
    <div className="earth-container" 
    >
      <Planet variant="earth">
        {Object.keys(PlanetProperties["earth"]["continents"]).map((island) => (
          <div className={"island" + ` island--${island}`} key={island}>
            {Array(parseInt(PlanetProperties["earth"]["continents"][island]["layers"]) - 1) // -1 as the final layer has no width or height
              .fill("")
              .map((_, i) => (
                <div className="plate" key={i}>
                  <div className="surface">
                    {Array(
                      parseInt(
                        PlanetProperties["earth"]["continents"][island]?.["components"] || 1
                      )
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
    <div className="cloud-container">
      <Planet variant="clouds">
        {Object.keys(PlanetProperties["earth"]["clouds"]).map((cloud) => (<div className={`island cloud cloud--${cloud}`}>
          {Array(parseInt(VARIABLES["cloud-layers"]) + 1).fill("").map((_, i) => <div key={i} />)  // Plus one for final layer to be centered
          } 
        </div>))}
      </Planet>
    </div>
  </div>
);

export default Earth;
