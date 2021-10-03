import Planet from "../Planet";
import "./Earth.sass";

const Earth = (props) => {

  return (
    <>
      {Array(1)
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
        ))}
      {
        <div className="face face__south_america">
          {Array(25)
            .fill("")
            .map((v, i) => (
              <div className="land land__south_america" key={i}>
                <div />
              </div>
            ))}
        </div>
      }
    </>
  );
};
export default Earth;
