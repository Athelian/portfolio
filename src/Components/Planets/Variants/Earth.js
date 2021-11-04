import Planet from "Components/Planets/Planet";
import React from "react";
import PlanetProperties from "../PlanetProperties";
import "./Earth.sass";

const Earth = () => (
  <div>
    <div className="cloud-holder">
      <div className={`planet planet--clouds`}>
        <div className="sphere sphere--clouds">
          <div className="hemisphere">
            <div className={"island cloud"}>
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="earth-holder">
      <Planet variant={`earth`}>
        {Object.keys(PlanetProperties["earth"]).map((island) => (
          <div className={"island" + ` island--${island}`} key={island}>
            {Array(parseInt(PlanetProperties["earth"][island]["layers"]) - 1) // -1 as the final layer has no width or height
              .fill("")
              .map((_, i) => (
                <div className="plate" key={i}>
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
              ))}
          </div>
        ))}
      </Planet>
    </div>
  </div>
);

export default Earth;
