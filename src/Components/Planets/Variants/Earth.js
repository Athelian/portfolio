import Planet from "Components/Planets/Planet";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import VARIABLES from "../../../_variables.module.sass";
import "./Earth.sass";

const NUMBER_OF_CONTINENTS = 30;
const { LAYERS_PER_ISLAND } = VARIABLES;

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (parseInt(max) - min + 1)) + min;

// const getRandomContinentNumbers = () => {
//   let _numberOfContinents = NUMBER_OF_CONTINENTS;
//   const randomNumbers = [];
//   while (_numberOfContinents) {
//     let random = getRandomInt(0, 100);
//     while (
//       randomNumbers.includes(random)
//       // randomNumbers.some((num) => random > num - 2 && random < num + 2)
//     ) {
//       random = getRandomInt(0, 100);
//     }
//     randomNumbers.push(random);
//     _numberOfContinents--;
//   }
//   return randomNumbers;
// };

const Earth = () => {
  // const continentNumbers = getRandomContinentNumbers();
  // const _continentNumbers = [...continentNumbers];
  const [update, setUpdate] = useState(false);
  const rots = [];

  return (
    <div>
      <Button onClick={() => setUpdate((prev) => !prev)} />
      <Planet variant="earth">
        {Array(NUMBER_OF_CONTINENTS)
          .fill("")
          .map((_, i) => {
            let rotation = getRandomInt(0, 360);
            rots.push(rotation);
            rotation = (rotation < rots[rots.length - 2] + 45 && rotation > rots[rots.length - 2] - 45) ? rotation + 180 : rotation
            while (rotation > 360) {
              rotation = rotation - 360
            }

            return (
              <div
                className={
                  "island" +
                  ` island--${
                  // _continentNumbers.shift()
                  i
                  }` +
                  ` island--rotate-z-${rotation}deg`
                }
                key={i}
              >
                {Array(parseInt(LAYERS_PER_ISLAND) - 1) // -1 as the final layer has no width or height and bugs out sass
                  .fill("")
                  .map((_, i) => (
                    <div
                      className="plate"
                      key={i}
                      style={
                        i < getRandomInt(12, 24)
                          ? { contentVisibility: "hidden" }
                          : {}
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
