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
        I am a fullstack engineer with a focus on{" "}
        <Popup
          basic
          content={<h4>(M)ongo (E)xpress (R)eact (N)ode</h4>}
          inverted
          on="click"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          trigger={<span>MERN</span>}
          position="bottom right"
        />{" "}
        stacks
      </h3>
    </header>
  );
};

export default Header
