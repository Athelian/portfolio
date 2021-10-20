/*
 * @Author: Eliot.Austin-Forbes 
 * @Date: 2021-10-19 17:48:05 
 * @Last Modified by: Eliot.Austin-Forbes
 * @Last Modified time: 2021-10-20 22:44:40
 */

import Planet from "Components/Planets/Planet";
import VARIABLES from "../../../_variables.module.sass";
import "./Earth.sass";

const NUMBER_OF_ISLANDS = 6
const ISLANDS_NO_TILT = [0, 1];

const Earth = () => (
  <Planet>
    {Array(NUMBER_OF_ISLANDS >= 2 ? NUMBER_OF_ISLANDS : 2)
      .fill("")
      .map((_, i) => (
        <div
          className={
            "island" +
            ` island--${i}` +
            (ISLANDS_NO_TILT.includes(i) ? " island--no_tilt" : "")
          }
          key={i}
        >
          {Array(parseInt(VARIABLES.LAYERS_PER_ISLAND))
            .fill("")
            .map((v, i) => (
              <div className="plate" key={i}>
                <div className="land" />
              </div>
            ))}
        </div>
      ))}
  </Planet>
);

export default Earth;
