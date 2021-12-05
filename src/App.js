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
  const [scrollYPercentage, setScrollYPercentage] = useState(0);
  const h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  const percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  window.onscroll = () => setScrollYPercentage(percent);
  console.log("percent", percent);

  return (
    <div className="Portfolio-Site">
      <Stars />
      <div className="Portfolio-Site__Layout">
        <Header visible />
        <div className="Portfolio-Site__Left">
          {/* <Earth scrollYPercentage={scrollYPercentage} /> */}
        </div>
        <div className="Portfolio-Site__Right">
          <Slides scrollYPercentage={scrollYPercentage} />
        </div>
        <Links />
      </div>
    </div>
  );
}

export default App;
