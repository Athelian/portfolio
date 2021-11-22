import Links from "Components/Links";
import Earth from "Components/Planets/Variants/Earth/Earth";
import Slides from "Components/Slides";
import Stars from "Components/Stars";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "semantic-ui-css/semantic.min.css";
import "./App.sass";
import Header from "./Components/Header";
import "./Effects.css";

function App() {
  const [scrollY, setScrollY] = useState(0)
  window.onscroll = () => setScrollY(window.scrollY);

  return (
    <div className="Portfolio-Site">
      <Stars />
      <div className="Portfolio-Site__Layout">
        <Header visible />
        <div className="Portfolio-Site__Left">
          <Earth scrollY={scrollY}/>
        </div>
        <div className="Portfolio-Site__Right">
          <Slides scrollY={scrollY}/>
        </div>
        <Links />
      </div>
    </div>
  );
}

export default App;
