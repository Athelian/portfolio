import Planet from "Components/Planets/Planet";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import VARIABLES from "../../../_variables.module.sass";
import "./Earth.sass";

const NUMBER_OF_CONTINENTS = 6
const NUMBER_OF_GLACIERS = 2
const NUMBER_OF_ISLANDS = NUMBER_OF_CONTINENTS + NUMBER_OF_GLACIERS

const getRandomInt = (min, max) => Math.floor(Math.random() * (parseInt(max) - min + 1)) + min

const Earth = () => {
  const { TOTAL_POSSIBLE_RANDOM_POSITIONS, LAYERS_PER_ISLAND } = VARIABLES
  const generateIsland = () => {
    let numberOfIslands = NUMBER_OF_CONTINENTS
    const randomNumbers = []
    while (numberOfIslands) {
      let random = getRandomInt(NUMBER_OF_GLACIERS, TOTAL_POSSIBLE_RANDOM_POSITIONS)
      while (randomNumbers.includes(random) || (random > 70 || (random < 51 && random > 20)) || randomNumbers.some(num => {
        const min = num - 5
        const max = num + 5
        return random < max && random > min
      }
      )) {
        random = getRandomInt(NUMBER_OF_GLACIERS, TOTAL_POSSIBLE_RANDOM_POSITIONS)
      }
      randomNumbers.push(random)
      numberOfIslands--;
    }
    return randomNumbers
  }

  // useEffect(() => setIslandNumbers(generateIsland()), [])
  const [islandNumbers, setIslandNumbers] = useState(generateIsland())

  const _islandNumbers = [...islandNumbers]

  return (
    <>
      <div>
        <Button content="New Planet" onClick={() => setIslandNumbers(generateIsland())}></Button>
      </div>
      <div>
        <Planet>
          {Array(
            NUMBER_OF_ISLANDS
          )
            .fill("")
            .map((_, i) => {
              const isGlacier = i < NUMBER_OF_GLACIERS
              return <div
                className={
                  "island" +
                  ` island--${isGlacier ? "ice" :
                    _islandNumbers.shift()
                  // 11
                  }` +
                  (isGlacier ? " island--no_tilt" : "")
                }
                key={i}
              >
                {Array(parseInt(LAYERS_PER_ISLAND) - 1)  // -1 as the final layer has no width or height and bugs out sass
                  .fill("")
                  .map((v, i) => (
                    <div className="plate" key={i}>
                      <div className="land" />
                    </div>
                  ))}
              </div>
            })}
        </Planet>
      </div>
    </>
  )
};

export default Earth;
