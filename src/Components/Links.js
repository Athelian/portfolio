import github from "Images/Logos/Links/github.png";
import linkedin from "Images/Logos/Links/linkedin.png";
import resumeImg from "Images/resume.png";
import mediumBlack from "Images/Logos/Links/medium-black.png";
import resume from "Assets/Resume, Eliot Austin-Forbes.pdf";
import "./Links.sass"

const Links = () => {
  return (
    <footer className="Links">
      {[
        [github, "https://www.github.com/athelian"],
        [linkedin, "https://www.linkedin.com/in/eaustinforbes/"],
        [mediumBlack, "https://medium.com/@ejaustinforbes"],
        [resumeImg, resume, true],
      ].map((_) => (
        <a download={"Eliot Austin-Forbes Resume"} href={_[1]} rel="noopener noreferrer" target="_blank">
          <img className="hvr-bob" src={_[0]} />
        </a>
      ))}
    </footer>
  );
};

export default Links;
