import Planet from "../Planet";
import "./Earth.sass"

const Earth =
   Array(2)
    .fill("")
    .map((v, i) => (
      <div className="face face__africa" key={i}>
        {Array(25)
          .fill("")
          .map((v, i) => (
            <div className="land land__africa" key={i}>
              <div />
            </div>
          ))}
      </div>
    ));

export default Planet({variant: Earth})