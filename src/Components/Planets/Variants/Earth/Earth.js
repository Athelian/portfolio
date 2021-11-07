import Planet from "Components/Planets/Planet";
import React from "react";
import Clouds from "./Components/Clouds";
import PlanetProperties from "../../PlanetProperties";
import "./Earth.sass";
import useWindowDimensions from "../../../../Utility/useWindowDimensions";

console.log(PlanetProperties);
const Earth = () => {
  const { vmin } = useWindowDimensions();
  const scale = 720 - vmin;
  let scaleReduction = Math.floor((scale - (scale % 10)) / 20);
  if (scaleReduction > 20) scaleReduction = 20;
  if (scaleReduction < 0) scaleReduction = 0;
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
                {PlanetProperties["earth"]["continents"][island]?.landmark && (
                  <div className="landmark" />
                )}
              </div>
            )
          )}
        </Planet>
      </div>
      <Clouds scaleReduction={scaleReduction} />
    </div>
  );
};

export default Earth;
