import Planet from "Components/Planets/Planet";
import React from "react";
import PlanetProperties from "../PlanetProperties";
import "./Earth.sass";

console.log(PlanetProperties)

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
            .map(
              (_, i) =>
                i < 10000 && (
                  <div
                    className="plate"
                    key={i}
                    style={i === -1 ? { display: "none" } : {}}
                  >
                    <div className="land__window">
                      {Array(
                        parseInt(
                          PlanetProperties["earth"][island]["components"]
                        )
                      )
                        .fill("")
                        .map((_, i) => (
                          <>
                            <div className="land" key={i}>
                              {/* <div /> */}
                            </div>
                          </>
                        ))}
                    </div>
                    {/* <div className="test" /> */}
                    {/* <div className="test test-up" /> */}
                  </div>
                )
            )}
        </div>
      ))}
    </Planet>
  </div>
);

export default Earth;
