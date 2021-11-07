import { useState } from "react";
import VARIABLES from "../../../../../_variables.module.sass";

import PlanetProperties from "../../../PlanetProperties";

const randomNumber = ({ min, max }) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const clouds = Array(randomNumber({ min: 5, max: 16 }))
  .fill("")
  .map((cloud, i) => {
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

const Clouds = (props) => {
  const { scaleReduction } = props;
  // const [clouds, setClouds] = useState(genClouds());
  return clouds.map((cloud) => (
    <div
      className={`planet planet--clouds planet--clouds--y-rotation--${cloud.randomY}`}
    >
      <div className={`sphere`}>
        <div
          className="hemisphere"
          style={{
            transform: `rotateY(${cloud.randomY}deg) rotateZ(${cloud.randomZ}deg)`
          }}
        >
          <div
            className={`island cloud cloud--${cloud.randomCloud} cloud--scale-${
              cloud.randomScale - scaleReduction
            }`}
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
  ));
};

export default Clouds;
