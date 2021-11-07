import VARIABLES from "../../../../../_variables.module.sass";
import PlanetProperties from "../../../PlanetProperties";
import Planet from "Components/Planets/Planet";
import useWindowDimensions from "Utility/useWindowDimensions";

const randomNumber = ({ min, max }) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const clouds = Array(randomNumber({ min: 5, max: 16 }))
  .fill("")
  .map(() => {
    const randomZ = randomNumber({ min: -50, max: 50 });
    const randomY = randomNumber({ min: 0, max: 36 }) * 10;
    const clouds = Object.values(PlanetProperties["earth"]["clouds"]).map(
      (properties) => properties["label"]
    );
    const randomCloud =
      clouds[randomNumber({ min: 0, max: clouds.length - 1 })];
    const randomScale = randomNumber({ min: 21, max: 30 });
    return { randomZ, randomY, randomCloud, randomScale };
  });

const Clouds = () => {
  const { vmin } = useWindowDimensions();
  const scale = 720 - vmin;
  let scaleReduction = Math.floor((scale - (scale % 10)) / 20);
  if (scaleReduction > 20) scaleReduction = 20;
  if (scaleReduction < 0) scaleReduction = 0;
  return (
    <>
      {clouds.map((cloud) => (
        <Planet
          planetClassname={`planet--clouds planet--clouds--y-rotation--${cloud.randomY}`}
          hemisphereProps={{
            style: {
              transform: `rotateY(${cloud.randomY}deg) rotateZ(${cloud.randomZ}deg)`
            }
          }}
        >
          <div
            className={`island cloud cloud--${cloud.randomCloud} cloud--scale-${
              cloud.randomScale - scaleReduction
            }`}
          >
            {Array(parseInt(VARIABLES["cloud-layers"]) + 1) // Plus one for final layer to be centered
              .fill("")
              .map((_, i) => (
                <div key={i} />
              ))}
          </div>
        </Planet>
      ))}
    </>
  );
};

export default Clouds;
