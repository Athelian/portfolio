import Planet from "Components/Planets/Planet";
import React, { useRef } from "react";
import PlanetProperties from "../../PlanetProperties";
import "./Earth.sass";
import useWindowDimensions from "Utility/useWindowDimensions";
import VARIABLES from "../../../../_variables.module.sass";

const randomNumber = ({ min, max }) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const clouds = Array(randomNumber({ min: 10, max: 20 }))
  .fill("")
  .map(() => {
    const randomZ = randomNumber({ min: -50, max: 50 });
    const randomY = randomNumber({ min: 0, max: 36 }) * 10;
    const clouds = Object.values(PlanetProperties["earth"]["clouds"]).map(
      (properties) => properties["label"]
    );
    const randomCloud =
      clouds[randomNumber({ min: 0, max: clouds.length - 1 })];
    const randomScale = randomNumber({ min: 21, max: 30 });
    return { randomZ, randomY, randomCloud, randomScale };
  });
const flags = ["UK", "JP"];

const Earth = () => {
  const { vmin } = useWindowDimensions();
  const scale = 720 - vmin;
  let scaleReduction = Math.floor((scale - (scale % 10)) / 20);
  if (scaleReduction > 20) scaleReduction = 20;
  if (scaleReduction < 0) scaleReduction = 0;

  const extraterrestrialRef = useRef();

  window.onscroll = () => scrollRotate();

  const scrollRotate = () => {
    if (extraterrestrialRef.current)
      extraterrestrialRef.current.style.transform =
        "rotateY(" + -window.scrollY + "deg)";
  };

  return (
    <div className="Earth">
      <div className="Earth__Earth-Container">
        <Planet planetClassname="Planet--Earth">
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
      <div className="Earth__Flags">
        {flags.map((flag) => (
          <Planet planetClassname={"Planet--Flag" + " Planet--Flag--" + flag}>
            <div className="island landmark">
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
      <div className="clouds">
        {clouds.map((cloud) => (
          <Planet
            planetClassname={`Planet--clouds Planet--clouds--y-rotation--${cloud.randomY}`}
            hemisphereProps={{
              style: {
                transform: `rotateY(${cloud.randomY}deg) rotateZ(${cloud.randomZ}deg)`
              }
            }}
          >
            <div
              className={`island cloud cloud--${
                cloud.randomCloud
              } cloud--scale-${cloud.randomScale - scaleReduction}`}
            >
              {Array(parseInt(VARIABLES["cloud-layers"]) + 1) // Plus one for final layer to be centered
                .fill("")
                .map((_, i) => (
                  <div key={i} />
                ))}
            </div>
          </Planet>
        ))}
      </div>
      <div className="extraterrestrials">
        <Planet
          planetClassname="Planet Planet--extraterrestrial"
          sphereProps={{ ref: extraterrestrialRef }}
        >
          <div className="island island--rocket">
            {Array(9)
              .fill("")
              .map((_, i) => (
                <div className="rocket">
                  <div className="rocket-body">
                    <div className="body">
                      {i === 4 && <div className="body__sail" />}
                    </div>
                    <div className="fin fin-left">
                      {i === 4 && <div className="fin__sail" />}
                    </div>
                    <div className="fin fin-right">
                      {i === 4 && <div className="fin__sail" />}
                    </div>
                    <div className="window window--major" />
                    <div className="window window--minor" />
                    {i === 4 && (
                      <>
                        <div className="exhaust-flame" />
                        <div className="sail" />
                      </>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </Planet>
      </div>
    </div>
  );
};

export default Earth;
