import Planet from "Components/Planets/Planet";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import VARIABLES from "../../../_variables.module.sass";
import "./Earth.sass";

const NUMBER_OF_CONTINENTS = 30;
const { LAYERS_PER_ISLAND } = VARIABLES;

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (parseInt(max) - min + 1)) + min;

const Earth = () => {
  // eslint-disable-next-line
  const [update, setUpdate] = useState(false);
  const rots = [];

  return (
    <div>
      <Button onClick={() => setUpdate((prev) => !prev)} />
      <Planet variant="earth">
        {Array(NUMBER_OF_CONTINENTS)
          .fill("")
          .map((_, i) => {
            let rotation = i === 0 ? getRandomInt(0, 360) : rots[rots.length - 1] + 20 + getRandomInt(1, 180);
            if (rotation > 360) rotation = rotation - 360;
            rots.push(rotation);
            return (
              <div
                className={
                  "island" +
                  ` island--${i
                  }` +
                  ` island--rotate-z-${rotation}deg`
                }
                key={i}
              >
                {Array(parseInt(LAYERS_PER_ISLAND) - 1) // -1 as the final layer has no width or height
                  .fill("")
                  .map((_, i) => (
                    <div
                      className="plate"
                      key={i}
                      style={
                        i < getRandomInt(12, 24)
                          ? { contentVisibility: "hidden" }
                          : null
                      }
                    >
                      <div className="land" />
                    </div>
                  ))}
              </div>
            );
          })}
      </Planet>
    </div>
  );
};

export default Earth;
