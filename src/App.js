import Earth from "Components/Planets/Variants/Earth/Earth";
import bitmoji from "Images/bitmoji.png";
import "semantic-ui-css/semantic.min.css";
import { Image, Popup } from "semantic-ui-react";
import "./App.sass";
import flaskBook from "Images/flask-book.png";
import { useEffect, useRef } from "react";
import { useEffect, useRef, useState } from "react";

function App() {
  const titleRef = useRef(null);
  const [titleInView, setTitleInView] = useState(false);

  useEffect(() => {
    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 0.2
    };
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) setTitleInView(true)
        else setTitleInView(false)
      },
      options
    );
    titleRef.current && observer.observe(titleRef.current);
    return () => titleRef.current && observer.unobserve(titleRef.current);
  }, [titleRef]);

  return (
    <div className="Portfolio-Site">
      <div className="stars">
        {Array(64)
          .fill("")
          .map(() => (
            <div className="star">
              <div className="star-top"></div>
              <div className="star-bottom"></div>
            </div>
          ))}
      </div>
      <header>
        <h1>
          <h1>
            Eliot
            <Image alt="bitmoji" circular src={bitmoji} />
          </h1>
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
      <section className="section section--light">
        <h2 className={titleInView ? "slide-out-shadow" : ""} ref={titleRef}>
          About
        </h2>
        <div className="side-container side-container--left-dominant">
          <div className="left text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet arcu lacus. Sed enim augue, maximus in tristique vitae, venenatis non orci. Donec tortor sem, maximus scelerisque nulla sed, tristique ultrices justo. Aenean faucibus tempus ex sit amet finibus. Donec mattis viverra nunc vel commodo. Integer ornare felis sed neque ullamcorper, sed scelerisque magna sodales. Maecenas arcu nunc, dapibus ut eleifend et, aliquam ac lacus. Fusce ultrices consequat odio, vitae faucibus arcu volutpat id. Phasellus venenatis venenatis sapien, in rhoncus odio semper at. Curabitur id mauris quis nunc imperdiet bibendum lobortis ac mi.</div>
          <div className="right"><img src={flaskBook}/></div>
        </div>
      </section>
    </div>
  );
}

export default App;
