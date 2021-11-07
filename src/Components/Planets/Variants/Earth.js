import Planet from "Components/Planets/Planet";
import React from "react";
import PlanetProperties from "../PlanetProperties";
import "./Earth.sass";
import VARIABLES from "../../../_variables.module.sass";

const randomNumber = ({ min, max }) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Earth = () => (
  <div className="earth">
    <div
      className="earth-container"
      // style={{ opacity: 0.1 }}
    >
      <Planet variant="earth">
        {Object.keys(PlanetProperties["earth"]["continents"]).map((island) => (
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
        ))}
      </Planet>
    </div>
    {Array(randomNumber({ min: 2, max: 10 }))
      .fill("")
      .map((cloud, i) => {
        const randomZ = randomNumber({ min: -70, max: 70 });
        const randomY = randomNumber({ min: 0, max: 36 }) * 10;
        const clouds = Object.values(PlanetProperties["earth"]["clouds"]).map(
          (properties) => properties["label"]
        );
        const randomCloud =
          clouds[randomNumber({ min: 0, max: clouds.length - 1 })];
        return (
          <div
            className={`planet planet--clouds planet--clouds--y-rotation--${randomY}`}
          >
            <div className={`sphere`}>
              <div
                className="hemisphere"
                style={{
                  transform: `rotateY(${randomY}deg) rotateZ(${randomZ}deg)`
                }}
              >
                <div
                  className={`island cloud cloud--${randomCloud} cloud--scale-1`}
                >
                  {
                    Array(parseInt(VARIABLES["cloud-layers"]) + 1)
                      .fill("")
                      .map((_, i) => (
                        <div key={i} />
                      )) // Plus one for final layer to be centered
                  }
                </div>
              </div>
            </div>
          </div>
        );
      })}
  </div>
);

export default Earth;
