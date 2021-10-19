/*
 * @Author: Eliot.Austin-Forbes
 * @Date: 2021-10-19 14:42:44
 * @Last Modified by: Eliot.Austin-Forbes
 * @Last Modified time: 2021-10-19 16:42:55
 */

import "./Planet.sass";
import "./Variants/Earth.sass";

const Planet = ({ children }) => {
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
