import bitmoji from "Images/bitmoji.png";
import { Image } from "semantic-ui-react";
import "./Header.sass";

const Header = (props) => {

  return (
    <header>
      <div className="Header__Name">
        <h1>
          <h1>
            Eliot
            <Image alt="bitmoji" circular src={bitmoji} />
          </h1>
          Austin-Forbes
        </h1>
      </div>
      <h3 className="Header__Introduction">
        Fullstack Engineer 
      </h3>
    </header>
  );
};

export default Header
