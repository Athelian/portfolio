import Earth from "Components/Planets/Variants/Earth/Earth";
import about from "Images/about.png";
import bitmoji from "Images/bitmoji.png";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image, List, Popup } from "semantic-ui-react";
import "./App.sass";

function App() {
  return (
    <div className="Portfolio-Site">
      <header>
        <h1>
          <div>
            Eliot
            <Image alt="bitmoji" circular src={bitmoji} />
          </div>
          Austin-Forbes
        </h1>
        <div>
          <h3 className="introduction">
            I am a fullstack engineer with a focus on{" "}
            <Popup
              basic
              content={<h4>(M)ongo (E)xpress (R)eact (N)ode</h4>}
              inverted
              on="click"
              style={{
                backgroundColor: "rgba(0,0,0,0.2)"
              }}
              trigger={<span>MERN</span>}
              position="right center"
              offset={[20, 60]}
            />{" "}
            stacks
          </h3>
        </div>
      </header>
      <Earth />
      {/* <section className="section section--white"></section> */}
    </div>
  );
}

export default App;
