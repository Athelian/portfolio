import Planet from "Components/Planets/Planet";
import { useRef } from "react";
import VARIABLES from "../../../../../_variables.module.sass";
import "./ExtraTerrestrials.sass";

const ExtraTerrestrials = (props) => {
  const { scrollY } = props;

  const extraTerrestrialsRef = useRef();

  if (extraTerrestrialsRef.current)
    extraTerrestrialsRef.current.style.transform =
      "rotateY(" + -scrollY / 2 + "deg)";

  return (
    <div className="Earth__Extra-Terrestrials">
      <Planet
        planetClassname="Planet--Extra-Terrestrials"
        sphereProps={{ ref: extraTerrestrialsRef }}
      >
        <div className="Island Island--Rocket">
          {Array(parseInt(VARIABLES["rocket-layers"]))
            .fill("")
            .map((_, i) => {
              const middle =
                i === Math.ceil(parseInt(VARIABLES["rocket-layers"]) / 2);
              return (
                <div className="Rocket">
                  <div className="Rocket__Inner">
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
