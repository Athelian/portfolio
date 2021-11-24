import Planet from "Components/Planets/Planet";
import { useRef } from "react";
import getRotation from "Utility/getRotation";
import VARIABLES from "../../../../../_variables.module.sass";
import "./ExtraTerrestrials.sass";

const getRocketTitle = () =>
  getComputedStyle(document.documentElement).getPropertyValue("--title");
const setRocketTitle = (title) =>
  document.documentElement.style.setProperty("--title", `"${title}"`);

const ExtraTerrestrials = (props) => {
  const { scrollY } = props;
  const rocketRef = useRef();
  const rotation = getRotation({scrollY, slidesOrPlanet: "planet"})

  if (rotation > 0) getRocketTitle() !== "About" && setRocketTitle("About");
  else if (rotation > -360)
    getRocketTitle() !== "Projects" && setRocketTitle("Projects");
  else if (rotation > -720)
    getRocketTitle() !== "Test" && setRocketTitle("Test");

  return (
    <div className="Earth__Extra-Terrestrials">
      <Planet
        planetClassname={"Planet--Extra-Terrestrials" + (Math.abs(Math.floor(rotation / 180)) % 2 === 1 ? " Planet--Extra-Terrestrials--Dropped" : "")}
        sphereProps={{ style: { transform: `rotateY(${rotation}deg)` } }}
      >
        <div className="Island Island--Rocket">
          {Array(parseInt(VARIABLES["rocket-layers"]))
            .fill("")
            .map((_, i) => {
              const middle =
                i === Math.ceil(parseInt(VARIABLES["rocket-layers"]) / 2);
              return (
                <div className="Rocket">
                  <div className="Rocket__Inner" ref={rocketRef}>
                    <div className="Rocket__Body">
                      {middle && <div className="Rocket__Sail" />}
                    </div>
                    <div className="Rocket__Fin Rocket__Fin--Left">
                      {middle && <div className="Rocket__Fin__Sail" />}
                    </div>
                    <div className="Rocket__Fin Rocket__Fin--Right">
                      {middle && <div className="Rocket__Fin__Sail" />}
                    </div>
                    <div className="Rocket__Window Rocket__Window--Major" />
                    <div className="Rocket__Window Rocket__Window--Minor" />
                    {middle && (
                      <>
                        <div className="Rocket__Exhaust-Flame" />
                        <div className="Rocket__3D-Sail" />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </Planet>
    </div>
  );
};

export default ExtraTerrestrials;
