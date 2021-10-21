import Planet from "Components/Planets/Planet";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import VARIABLES from "../../../_variables.module.sass";
import "./Earth.sass";

const NUMBER_OF_CONTINENTS = 1;
const NUMBER_OF_GLACIERS = 2;
const NUMBER_OF_ISLANDS = NUMBER_OF_CONTINENTS + NUMBER_OF_GLACIERS;

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (parseInt(max) - min + 1)) + min;

const generateIsland = () => {
  let numberOfIslands = NUMBER_OF_CONTINENTS;
  let counter = 0;
  const random2to25 = () => getRandomInt(2, 20);
  const random76to95 = () => getRandomInt(76, 95);
  const randomNumbers = [];
  while (numberOfIslands) {
    // Would be best to pick one number from each quadrant and repeat
    let random = counter % 2 === 0 ? random2to25() : random76to95()
    while (
      randomNumbers.includes(random)
    ) {
      random = counter % 2 === 0 ? random2to25() : random76to95()
    }
    randomNumbers.push(random);
    numberOfIslands--;
    counter++
  }
  return randomNumbers;
};

const Earth = () => {
  const { TOTAL_POSSIBLE_RANDOM_POSITIONS, LAYERS_PER_ISLAND } = VARIABLES;

  const [islandNumbers, setIslandNumbers] = useState(generateIsland());
  const _islandNumbers = [...islandNumbers];

  return (
    <>
      <div>
        <Button
          content="New Planet"
          onClick={() => setIslandNumbers(generateIsland())}
        ></Button>
      </div>
      <div>
        <Planet>
          {Array(NUMBER_OF_ISLANDS)
            .fill("")
            .map((_, i) => {
              const isGlacier = i < NUMBER_OF_GLACIERS;
              return (
                <div
                  className={
                    "island" +
                    ` island--${isGlacier ? "ice" : _islandNumbers.shift()}` +
                    // ` island--rotate-Z-${(360 / NUMBER_OF_CONTINENTS) * (i - 2)}deg` +
                    (isGlacier ? " island--no_tilt" : "")
                  }
                  key={i}
                >
                  {Array(parseInt(LAYERS_PER_ISLAND) - 1) // -1 as the final layer has no width or height and bugs out sass
                    .fill("")
                    .map((v, i) => (
                      // <div>
                      <div className="plate" key={i}>
                        <div className="land" />
                      </div>
                      // </div>
                    ))}
                </div>
              );
            })}
        </Planet>
      </div>
    </>
  );
};

export default Earth;
