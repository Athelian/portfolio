import Planet from "Components/Planets/Planet";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import VARIABLES from "../../../_variables.module.sass";
import "./Earth.sass";

const NUMBER_OF_CONTINENTS = 1;
const { LAYERS_PER_ISLAND, TOTAL_POSSIBLE_RANDOM_POSITIONS, ISLAND_DIAMETER } =
  VARIABLES;
// it is imperative to spread out the islands evenly over a period of total-random-positions - c / 2,
// where c is some constant adjusting for the island diameter, as an apex position island will
// extend beyond the pole somewhat i.e, the island position value is at the extremity of the
// island not in the center
const landIndexInterval =
  (parseInt(TOTAL_POSSIBLE_RANDOM_POSITIONS) - parseInt(ISLAND_DIAMETER) * 2) /
  2 /
  NUMBER_OF_CONTINENTS;

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (parseInt(max) - min + 1)) + min;

const Earth = () => {
  // eslint-disable-next-line
  const [update, setUpdate] = useState(false);
  const rotations = [];

  return (
    <div>
      <Button onClick={() => setUpdate((prev) => !prev)} />
      <Planet variant="earth">
        <div
          className={
            "island" +
            ` island--africa` +
            ` island--rotate-z-${0}deg`
          }
        >
          {Array(parseInt(LAYERS_PER_ISLAND) - 1) // -1 as the final layer has no width or height
            .fill("")
            .map((_, i) => (
              <div
                className="plate"
                key={i}
                style={
                  i < 20
                    ? { contentVisibility: "hidden" }
                    : null
                }
              >
                <div className="land" />
              </div>
            ))}
        </div>
        {/* <div
          className={
            "island" +
            ` island--africa backface_dome` +
            ` island--rotate-z-${0}deg`
          }
        >
          {Array(parseInt(LAYERS_PER_ISLAND) - 1) // -1 as the final layer has no width or height
            .fill("")
            .map((_, i) => (
              <div
                className="plate"
                key={i}
                style={
                  i < 20
                    ? { contentVisibility: "hidden" }
                    : null
                }
              >
                <div className="land" />
              </div>
            ))}
        </div> */}
        {/* <div
          className={
            "island" +
            ` island--europe` +
            ` island--rotate-z-${0}deg`
          }
        >
          {Array(parseInt(LAYERS_PER_ISLAND) - 1) // -1 as the final layer has no width or height
            .fill("")
            .map((_, i) => (
              <div
                className="plate"
                key={i}
                style={
                  i < 20
                    ? { contentVisibility: "hidden" }
                    : null
                }
              >
                <div className="land" />
              </div>
            ))}
        </div> */}
        {/* <div
          className={
            "island" +
            ` island--europe backface_dome` +
            ` island--rotate-z-${0}deg`
          }
        >
          {Array(parseInt(LAYERS_PER_ISLAND) - 1) // -1 as the final layer has no width or height
            .fill("")
            .map((_, i) => (
              <div
                className="plate"
                key={i}
                style={
                  i < 20 || i > 40
                    ? { contentVisibility: "hidden" }
                    : null
                }
              >
                <div className="land" />
              </div>
            ))}
        </div> */}
      </Planet>
    </div>
  );
};

export default Earth;
