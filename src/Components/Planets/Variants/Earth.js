/*
 * @Author: Eliot.Austin-Forbes 
 * @Date: 2021-10-19 17:48:05 
 * @Last Modified by:   Eliot.Austin-Forbes 
 * @Last Modified time: 2021-10-19 17:48:05 
 */

import Planet from "../Planet";
import "./Earth.sass";

const ISLANDS_NO_TILT = [1];
const ISLANDS_ICE = [1];

const Earth = () => (
  <Planet>
    {Array(3)
      .fill("")
      .map((_, i) => (
        <div
          className={
            "island" +
            (ISLANDS_NO_TILT.includes(i) ? " island--no_tilt" : "") +
            (ISLANDS_ICE.includes(i) ? " island--ice" : "")
          }
          key={i}
        >
          {Array(25)
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
