import VARIABLES from "../_variables.module.sass";
import "./Stars.sass";

export default function () {
  return (
    <div className="stars">
      {Array(parseInt(VARIABLES["number-of-stars"]))
        .fill("")
        .map(() => (
          <div className="Star">
            <div className="Star-Top" />
            <div className="Star-Bottom" />
          </div>
        ))}
    </div>
  );
}
