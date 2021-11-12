import VARIABLES from "../_variables.module.sass";

export default function () {return<div className="stars">
  {Array(parseInt(VARIABLES["number-of-stars"])).fill("").map(() =>
    <div className="star">
      <div className="star-top" />
      <div className="star-bottom" />
    </div>
  )}
</div>;}
