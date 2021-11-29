import bitmoji from "Images/bitmoji.png";
import { Image, Popup } from "semantic-ui-react";
import "./Header.sass"

const Header = (props) => {
  const {visible} = props

  return (
    <header className={visible ? "" : "Header--Hidden"}>
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
