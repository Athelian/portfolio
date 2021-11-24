import "./Project.sass"
import logo__technology__aws from "Images/Logos/Technologies/logo__technology__aws.png";
import logo__technology__dart from "Images/Logos/Technologies/logo__technology__dart.png";
import logo__technology__express from "Images/Logos/Technologies/logo__technology__express.png";
import logo__technology__flutter from "Images/Logos/Technologies/logo__technology__flutter.png";
import logo__technology__mongo from "Images/Logos/Technologies/logo__technology__mongo.png";
import logo__technology__node from "Images/Logos/Technologies/logo__technology__node.png";
import logo__technology__react from "Images/Logos/Technologies/logo__technology__react.png";
import logo__technology__sass from "Images/Logos/Technologies/logo__technology__sass.png";
import logo__technology__ubuntu from "Images/Logos/Technologies/logo__technology__ubuntu.png";

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
  }
};

const Project = (props) => {
  const { description, title, technologies } = props;
  return (
    <div className="Carousel__Project">
      <h2>{title}</h2>
      <div className="Carousel__Project__Technologies">
        {technologies.map((technology) => (
          <img src={findLogo(technology)} />
        ))}
      </div>
      <p>
        {description}
      </p>
    </div>
  );
};

export default Project;