import "./Planet.sass";

const Planet = ({ children }) => (
  <div className="planet">
    <div className="sphere">
      <div className="hemisphere">{children}</div>
      <div className="hemisphere"></div>
    </div>
  </div>
);

export default Planet;
