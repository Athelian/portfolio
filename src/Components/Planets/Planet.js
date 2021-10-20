/*
 * @Author: Eliot.Austin-Forbes
 * @Date: 2021-10-19 14:42:44
 * @Last Modified by: Eliot.Austin-Forbes
 * @Last Modified time: 2021-10-19 23:57:32
 */

import "./Planet.sass";
import styles from "./Variants/Earth.sass";

const Planet = ({ children }) => {

  console.log(styles)
  return (
    <div
      className="planet"
    >
      <div className="sphere">
        <div className="hemisphere">
          {children}
        </div>
        <div className="hemisphere"></div>
      </div>
    </div>
  );
};

export default Planet;
