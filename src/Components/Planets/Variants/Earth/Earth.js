import Planet from "Components/Planets/Planet";
import React, { useRef } from "react";
import VARIABLES from "../../../../_variables.module.sass";
import PlanetProperties from "../../PlanetProperties";
import Clouds from "./Components/Clouds";
import "./Earth.sass";

const flags = ["UK", "JP"];

const Earth = () => {

  const extraTerrestrialsRef = useRef();

  window.onscroll = () => scrollRotate();

  const scrollRotate = () => {
    if (extraTerrestrialsRef.current)
      extraTerrestrialsRef.current.style.transform =
        "rotateY(" + -window.scrollY + "deg)";
  };

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
      <div className="Earth__Flags">
        {flags.map((flag) => (
          <Planet planetClassname={"Planet--Flag" + " Planet--Flag--" + flag}>
            <div className="Island landmark">
              <div>
                <div className="Flag__Container">
                  <div className="Flag__Pole" />
                  <div className="Flag Flag--UK" />
                </div>
              </div>
            </div>
          </Planet>
        ))}
      </div>
      <Clouds />
      <div className="Earth__Extra-Terrestrials">
        <Planet
          planetClassname="Planet Planet--Extra-Terrestrials"
          sphereProps={{ ref: extraTerrestrialsRef }}
        >
          <div className="Island Island--Rocket">
            {Array(parseInt(VARIABLES["rocket-layers"]))
              .fill("")
              .map((_, i) => {
                const middle = i === Math.ceil(parseInt(VARIABLES["rocket-layers"]) / 2)
                return (
                  <div className="Rocket">
                    <div className="Rocket__Inner">
                      <div className="Rocket__Body">
                        {middle && <div className="Rocket__Sail" />}
                      </div>
                      <div className="Rocket__Fin Rocket__Fin--Left">
                        {middle && <div className="Rocket__Fin__Sail" />}
                      </div>
                      <div className="Rocket__Fin Rocket__Fin--Right">
                        {middle && <div className="Rocket__Fin__Sail" />}
                      </div>
                      <div className="Rocket__Window Rocket__Window--Major" />
                      <div className="Rocket__Window Rocket__Window--Minor" />
                      {middle && (
                        <>
                          <div className="Rocket__Exhaust-Flame" />
                          <div className="Rocket__3D-Sail" />
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </Planet>
      </div>
    </div>
  );
};

export default Earth;
