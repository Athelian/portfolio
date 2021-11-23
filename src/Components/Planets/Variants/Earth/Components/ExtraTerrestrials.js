import Planet from "Components/Planets/Planet";
import { useRef } from "react";
import VARIABLES from "../../../../../_variables.module.sass";
import "./ExtraTerrestrials.sass";

const initialRotation = parseInt(VARIABLES["starting-rotation"]);
const slideRotationInterval = parseInt(VARIABLES["slide-rotation-interval"]);
const numberOfProjects = 4;
const projectRotationIntervalFactor = 4; // Arbitrary value to increase/decrease the amount of scrolling required per project
const projectRotationInterval =
  (projectRotationIntervalFactor * slideRotationInterval) / numberOfProjects;

const getRocketTitle = () =>
  getComputedStyle(document.documentElement).getPropertyValue("--title");
const setRocketTitle = (title) =>
  document.documentElement.style.setProperty("--title", `"${title}"`);
const scrollYProjectStart = 8 * slideRotationInterval;
const scrollYProjectEnd =
  scrollYProjectStart + 8 * (numberOfProjects * projectRotationInterval);
const addedScroll = scrollYProjectEnd - scrollYProjectStart;

const ExtraTerrestrials = (props) => {
  const { scrollY } = props;
  const rocketRef = useRef();
  const projectSlideStart = initialRotation - slideRotationInterval;
  const projectSlideEnd =
    initialRotation -
    slideRotationInterval -
    numberOfProjects * projectRotationInterval;
  let rotation = scrollY / 1.59;
  let slideRotation = initialRotation - scrollY / 8;

  if (slideRotation > projectSlideStart) {
    rotation = initialRotation - rotation;
  } else if (slideRotation > projectSlideEnd) {
    rotation = initialRotation - 360;
  } else if (slideRotation < projectSlideEnd) {
    rotation = initialRotation - (scrollY - addedScroll) / 1.59;
  }

  if (rotation > 0) getRocketTitle() !== "About" && setRocketTitle("About");
  else if (rotation > -360)
    getRocketTitle() !== "Projects" && setRocketTitle("Projects");
  else if (rotation > -720)
    getRocketTitle() !== "Test" && setRocketTitle("Test");

  console.log(rotation)

  return (
    <div className="Earth__Extra-Terrestrials">
      <Planet
        planetClassname="Planet--Extra-Terrestrials"
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
