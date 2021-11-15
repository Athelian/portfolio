import github from "Images/github.png";
import linkedin from "Images/linkedin.png";
import mediumBlack from "Images/medium-black.png";
import "./Links.sass"

const Links = () => {
  return (
    <footer className="Links">
      {[
        [github, "https://www.github.com/athelian"],
        [linkedin, "https://www.linkedin.com/in/eaustinforbes/"],
        [mediumBlack, "https://medium.com/@ejaustinforbes"]
      ].map((_) => (
        <a href={_[1]} rel="noopener noreferrer" target="_blank">
          <img className="hvr-bob" src={_[0]} />
        </a>
      ))}
    </footer>
  );
};

export default Links;
