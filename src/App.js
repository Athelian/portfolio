import "./App.sass";

import React, { useState, useEffect } from "react";

const VARIABLES = { "cloud-layers": 3 };

function getVmin() {
  const { innerWidth: width, innerHeight: height } = window;
  const vmin = Math.min(width, height);
  return {
    vmin,
  };
}

function useWindowDimensions() {
  const [vmin, setVmin] = useState(getVmin());
  useEffect(() => {
    function handleResize() {
      setVmin(getVmin());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return vmin;
}

const PlanetProperties = {
  earth: {
    continents: {
      Africa: {
        layers: "20",
        diameter: "30.9523809524",
        rotation: "-8",
        z: "14",
        position: "10",
      },
      Europe: {
        layers: "20",
        diameter: "25",
        rotation: "0",
        z: "10",
        position: "520",
        components: "8",
        landmark: "true",
      },
      Asia: {
        layers: "20",
        diameter: "45.2380952381",
        rotation: "-4",
        z: "-45",
        position: "1919",
        components: "7",
      },
      America: {
        layers: "20",
        diameter: "48.8095238095",
        rotation: "20",
        z: "140",
        position: "560",
        components: "4",
      },
      Australasia: {
        layers: "20",
        diameter: "28.5714285714",
        rotation: "-10",
        z: "-89",
        position: "1",
        components: "24",
      },
    },
    clouds: {
      a: {
        center: "-95",
        label: "a",
        width: "632.15px",
        height: "271.38px",
      },
      b: {
        center: "0",
        label: "b",
        width: "762.01px",
        height: "301.12px",
      },
      c: {
        center: "0",
        label: "c",
        width: "737.64px",
        height: "409.58px",
      },
      d: {
        center: "0",
        label: "d",
        width: "778.11px",
        height: "406.46px",
      },
      e: {
        center: "130",
        label: "e",
        width: "750.41px",
        height: "391.78px",
      },
    },
  },
};

const randomNumber = ({ min, max }) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const clouds = Array(randomNumber({ min: 10, max: 20 }))
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
  const [zoomLevel, setZoomLevel] = useState(100);
  const scale = 720 - vmin;
  let scaleReduction = Math.floor((scale - (scale % 10)) / 20);
  if (scaleReduction > 20) scaleReduction = 20;
  if (scaleReduction < 0) scaleReduction = 0;

  useEffect(() => {
    const handleResize = () => {
      const browserZoomLevel = Math.round(window.devicePixelRatio * 100);
      setZoomLevel(browserZoomLevel);
    };
    window.addEventListener("resize", () => handleResize());
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="Earth__Clouds"
      style={zoomLevel > 175 ? { display: "none" } : {}}
    >
      {clouds.map((cloud) => (
        <Planet
          planetClassname={`Planet--Clouds Planet--Clouds--y-rotation--${cloud.randomY}`}
          hemisphereProps={{
            style: {
              transform: `rotateY(${cloud.randomY}deg) rotateZ(${cloud.randomZ}deg)`,
            },
          }}
        >
          <div
            className={`Island Cloud Cloud--${cloud.randomCloud} Cloud--scale-${
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
    </div>
  );
};

const Planet = (props) => (
  <div className={"Planet" + " " + props.planetClassname}>
    <div className="Sphere" {...props.sphereProps}>
      <div className={"Hemisphere"} {...props.hemisphereProps}>
        {props.children}
      </div>
    </div>
  </div>
);

const Earth = (props) => {
  return (
    <div className="Earth">
      <div className="Earth__Earth-Container">
        <Planet planetClassname="Planet--Earth">
          {Object.keys(PlanetProperties["earth"]["continents"]).map(
            (island) => (
              <div className={"Island" + ` Island--${island}`} key={island}>
                {Array(
                  parseInt(
                    PlanetProperties["earth"]["continents"][island]["layers"]
                  ) - 1
                ) // -1 as the final layer has no width or height
                  .fill("")
                  .map((_, i) => (
                    <div className="Plate" key={i}>
                      <div className="surface">
                        {Array(
                          parseInt(
                            PlanetProperties["earth"]["continents"][island]?.[
                              "components"
                            ] || 1
                          )
                        )
                          .fill("")
                          .map((_, i) => (
                            <div className="Land" key={i} />
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            )
          )}
        </Planet>
      </div>
      <Clouds />
    </div>
  );
};


const App = () => <Earth />;

export default App;
