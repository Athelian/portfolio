import logo__technology__aws from "Images/Logos/Technologies/logo__technology__aws.png";
import logo__technology__dart from "Images/Logos/Technologies/logo__technology__dart.png";
import logo__technology__express from "Images/Logos/Technologies/logo__technology__express.png";
import logo__technology__flutter from "Images/Logos/Technologies/logo__technology__flutter.png";
import logo__technology__mongo from "Images/Logos/Technologies/logo__technology__mongo.png";
import logo__technology__node from "Images/Logos/Technologies/logo__technology__node.png";
import logo__technology__react from "Images/Logos/Technologies/logo__technology__react.png";
import logo__technology__sass from "Images/Logos/Technologies/logo__technology__sass.png";
import logo__technology__ubuntu from "Images/Logos/Technologies/logo__technology__ubuntu.png";
import logo__technology__graphql from "Images/Logos/Technologies/logo__technology__graphql.svg";
import logo__technology__typescript from "Images/Logos/Technologies/logo__technology__typescript.png";
import logo__technology__flowtype from "Images/Logos/Technologies/logo__technology__flowtype.png";
import logo__technology__apollo from "Images/Logos/Technologies/logo__technology__apollo.png";
import "./Project.sass";

const findLogo = (name) => {
  switch (name) {
    case "aws":
      return logo__technology__aws;
    case "dart":
      return logo__technology__dart;
    case "express":
      return logo__technology__express;
    case "flutter":
      return logo__technology__flutter;
    case "mongo":
      return logo__technology__mongo;
    case "node":
      return logo__technology__node;
    case "react":
      return logo__technology__react;
    case "sass":
      return logo__technology__sass;
    case "ubuntu":
      return logo__technology__ubuntu;
    case "graphql":
      return logo__technology__graphql;
    case "typescript":
      return logo__technology__typescript;
    case "flowtype":
      return logo__technology__flowtype;
    case "apollo":
      return logo__technology__apollo;
  }
};

const Project = (props) => {
  const { description, title, technologies } = props;
  return (
    <div className="Carousel__Project">
      <h2>{title}</h2>
      {/* <div className="Carousel__Project__Technologies">
        {technologies.map((technology) => (
          <img src={findLogo(technology)} />
        ))}
      </div> */}
      <p>{description}</p>
    </div>
  );
};

export default Project;
