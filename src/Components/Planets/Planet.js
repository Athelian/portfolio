import "./Planet.sass"

const Planet = ({variant}) => (
  <div className="planet">
    <div className="sphere">
      <div className="hemisphere">
        {variant}
      </div>
      <div className="hemisphere"></div>
    </div>
  </div>
);

export default Planet;
