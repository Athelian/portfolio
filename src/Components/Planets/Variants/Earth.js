import Planet from "Components/Planets/Planet";
import VARIABLES from "../../../_variables.module.sass";
import "./Earth.sass";

const { LAYERS_PER_ISLAND } = VARIABLES;
const NUMBER_OF_CONTINENTS = 20;

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (parseInt(max) - min + 1)) + min;

const getRandomContinentNumbers = () => {
  let _numberOfContinents = NUMBER_OF_CONTINENTS;
  const randomNumbers = [];
  while (_numberOfContinents) {
    let random = getRandomInt(0, 100);
    while (randomNumbers.includes(random)) {
      random = getRandomInt(0, 100);
    }
    randomNumbers.push(random);
    _numberOfContinents--;
  }
  return randomNumbers;
};

const Earth = () => {
  const continentNumbers = getRandomContinentNumbers();
  const _continentNumbers = [...continentNumbers];
  return (
    <div>
      <Planet variant="earth">
        {Array(NUMBER_OF_CONTINENTS)
          .fill("")
          .map((_, i) => (
            <div
              className={
                "island" +
                ` island--${_continentNumbers.shift()}` +
                ` island--rotate-z-${getRandomInt(0, 360)}deg`
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
          ))}
      </Planet>
    </div>
  );
};

export default Earth;
