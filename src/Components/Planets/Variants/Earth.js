import Planet from "Components/Planets/Planet";
import React from "react";
import PlanetProperties from "../PlanetProperties";
import "./Earth.sass";
import VARIABLES from "../../../_variables.module.sass";

const Earth = () => (
  <div className="earth">
    <div className="earth-container" 
    // style={{ opacity: "0.1" }}
    >
      <Planet variant="earth">
        {Object.keys(PlanetProperties["earth"]).map((island) => (
          <div className={"island" + ` island--${island}`} key={island}>
            {Array(parseInt(PlanetProperties["earth"][island]["layers"]) - 1) // -1 as the final layer has no width or height
              .fill("")
              .map((_, i) => (
                <div className="plate" key={i}>
                  <div className="surface">
                    {Array(
                      parseInt(
                        PlanetProperties["earth"][island]?.["components"] || 1
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
        {/* <div className="island cloud cloud--1">
          {Array(parseInt(VARIABLES["cloud-layers"])).fill("").map((_, i) => <div key={i} />)}
        </div> */}
        <div className="island cloud cloud--2">
          {Array(parseInt(VARIABLES["cloud-layers"])).fill("").map((_, i) => <div key={i} />)}
        </div>
      </Planet>
    </div>
  </div>
);

export default Earth;
