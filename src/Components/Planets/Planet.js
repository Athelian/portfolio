/*
 * @Author: Eliot.Austin-Forbes
 * @Date: 2021-10-19 14:42:44
 * @Last Modified by: Eliot.Austin-Forbes
 * @Last Modified time: 2021-10-19 16:20:00
 */

import { useRef } from "react";
import "./Planet.sass";
import "./Variants/Earth.sass";

const Planet = ({ variant }) => {
  const box = useRef(null);

  return (
    <div
      className="planet"
      onMouseEnter={() => (box.current.style.animationPlayState = "paused")}
      onMouseLeave={() => (box.current.style.animationPlayState = "")}
    >
      <div className="sphere" ref={box}>
        <div className="hemisphere">
          {Array(2)
            .fill("")
            .map((v, i) => (
              <div className="face face__africa" key={i}>
                {Array(25)
                  .fill("")
                  .map((v, i) => (
                    <div className="land land__africa" key={i}>
                      <div className="land__land" />
                    </div>
                  ))}
              </div>
            ))}
        </div>
        <div className="hemisphere"></div>
      </div>
    </div>
  );
};

export default Planet;
