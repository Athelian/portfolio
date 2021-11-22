import Planet from "Components/Planets/Planet";
import React from "react";
import PlanetProperties from "../../../../Utility/PlanetProperties";
import Clouds from "./Components/Clouds";
import ExtraTerrestrials from "./Components/ExtraTerrestrials";
import Flags from "./Components/Flags";
import "./Earth.sass";

const Earth = (props) => {
  const { scrollY } = props;

  return (
    <div className="Earth">
      <div className="Earth__Earth-Container">
        <Planet planetClassname="Planet--Earth">
          {Object.keys(PlanetProperties["earth"]["continents"]).map(
            (island) => (
              <div className={"Island" + ` Island--${island}`} key={island}>
                {Array(
                  parseInt(
                    PlanetProperties["earth"]["continents"][island]["layers"]
                  ) - 1
                ) // -1 as the final layer has no width or height
                  .fill("")
                  .map((_, i) => (
                    <div className="Plate" key={i}>
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
                            <div className="Land" key={i} />
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            )
          )}
        </Planet>
      </div>
      <Flags />
      <Clouds />
      <ExtraTerrestrials scrollY={scrollY} />
    </div>
  );
};

export default Earth;
