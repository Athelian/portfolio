import Planet from "Components/Planets/Planet";
import React from "react";
import Clouds from "./Components/Clouds";
import PlanetProperties from "../../PlanetProperties";
import "./Earth.sass";

console.log(PlanetProperties);
const Earth = () => {
  return (
    <div className="earth">
      <div className="earth-container">
        <Planet planetClassname="planet--earth">
          {Object.keys(PlanetProperties["earth"]["continents"]).map(
            (island) => (
              <div className={"island" + ` island--${island}`} key={island}>
                {Array(
                  parseInt(
                    PlanetProperties["earth"]["continents"][island]["layers"]
                  ) - 1
                ) // -1 as the final layer has no width or height
                  .fill("")
                  .map((_, i) => (
                    <div className="plate" key={i}>
                      <div className="surface">
                        {Array(
                          parseInt(
                            PlanetProperties["earth"]["continents"][island]?.[
                              "components"
                            ] || 1
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
            )
          )}
        </Planet>
      </div>
      <Planet planetClassname="planet--flag">
        <div className="island landmark">
          <div style={{ transform: "rotateX(270deg) scale(0.2)" }}>
            <div
              className="contain-flag"
              style={{
                transform: "translate(0, -100%)"
              }}
            >
              <div className="pole" />
              <div className="flag" />
              <div className="shadow" />
              <div className="flag flag-2" />
            </div>
          </div>
        </div>
      </Planet>
    </div>
  );
};

export default Earth;
