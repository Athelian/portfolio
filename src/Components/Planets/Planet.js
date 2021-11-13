import "./Planet.sass";

const Planet = (props) => (
  <div className={"planet" + " " + props.planetClassname}>
    <div className="sphere" {...props.sphereProps}>
      <div className={"hemisphere"} {...props.hemisphereProps}>
        {props.children}
      </div>
    </div>
  </div>
);

export default Planet;
