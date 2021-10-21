import Planet from "Components/Planets/Planet";
import VARIABLES from "../../../_variables.module.sass";
import "./Earth.sass";

const NUMBER_OF_ISLANDS = 3
const NUMBER_OF_GLACIERS = 2

const getRandomInt = (min, max) => Math.floor(Math.random() * (parseInt(max) - min + 1)) + min

const Earth = () => {
  let numberOfIslands = NUMBER_OF_ISLANDS
  const { TOTAL_POSSIBLE_RANDOM_POSITIONS, LAYERS_PER_ISLAND } = VARIABLES
  const randomNumbers = []
  while (numberOfIslands) {
    let random = getRandomInt(NUMBER_OF_GLACIERS, TOTAL_POSSIBLE_RANDOM_POSITIONS)
    const z = Math.sqrt(20 * (random / 100))
    const y = Math.sqrt(20 * ((100 - random) / 100))
    while (randomNumbers.includes(random)) {
      random = getRandomInt(NUMBER_OF_GLACIERS, TOTAL_POSSIBLE_RANDOM_POSITIONS)

    }
    randomNumbers.push(random)
    numberOfIslands--;
  }

  return (
    <Planet>
      {Array(NUMBER_OF_ISLANDS + 2)
        .fill("")
        .map((_, i) => {
          const isGlacier = i < NUMBER_OF_GLACIERS
          return <div
            className={
              "island" +
              ` island--${isGlacier ? "ice" : randomNumbers.shift()}` +
              (isGlacier ? " island--no_tilt" : "")
            }
            key={i}
          >
            {Array(parseInt(LAYERS_PER_ISLAND))
              .fill("")
              .map((v, i) => (
                <div className="plate" key={i}>
                  <div className="land" />
                </div>
              ))}
          </div>
        })}
    </Planet>)
};

export default Earth;
