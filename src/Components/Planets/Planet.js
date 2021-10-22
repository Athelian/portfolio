import "./Planet.sass";

const Planet = ({ children, variant }) => (
  <div className={`planet planet--${variant}`}>
    <div className="sphere">
      <div className="hemisphere">{children}</div>
      <div className="hemisphere"></div>
    </div>
  </div>
);

export default Planet;
