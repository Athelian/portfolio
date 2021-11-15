import Planet from "Components/Planets/Planet";
import "./Flags.sass"

const flags = ["UK", "JP"];

const Flags = () => {
  return (
    <div className="Earth__Flags">
      {flags.map((flag) => (
        <Planet planetClassname={"Planet--Flag" + " Planet--Flag--" + flag}>
          <div className="Island landmark">
            <div>
              <div className="Flag__Container">
                <div className="Flag__Pole" />
                <div className="Flag" />
              </div>
            </div>
          </div>
        </Planet>
      ))}
    </div>
  );
};

export default Flags