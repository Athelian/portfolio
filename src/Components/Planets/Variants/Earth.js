import Planet from "Components/Planets/Planet";
import React from "react";
import PlanetProperties from "../PlanetProperties";
import "./Earth.sass";

console.log(PlanetProperties);

const Earth = (props) => (
  <div
    className={props.second && "hide"}
    style={{ position: "absolute" }}>
    <Planet variant={`earth`}>
      {Object.keys(PlanetProperties["earth"]).map((island) => {
        if (props.second) {
          if (island === "europe" || island === "africa") return
        } else {
          if (island === "asia") return;
        }
        return <div className={"island" + ` island--${island}`} key={island}>
          {Array(parseInt(PlanetProperties["earth"][island]["layers"]) - 1) // -1 as the final layer has no width or height
            .fill("")
            .map((_, i) => (
              // i < 10 &&
              <div
                className="plate"
                key={i}
                style={i < 0 ? { display: "none" } : {}}
              >
                {/* <div className="land__window"> */}
                {/* <div className="test"> */}
                {Array(
                  parseInt(
                    PlanetProperties["earth"][island]?.["components"] || 1
                  )
                )
                  .fill("")
                  .map((_, i) => (
                    <div className="land" key={i} />
                  ))}
                {/* </div> */}
                {/* </div> */}
              </div>
            ))}
        </div>;
      })}
    </Planet>
  </div>
);

export default Earth;
