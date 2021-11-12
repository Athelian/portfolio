import Earth from "Components/Planets/Variants/Earth/Earth";
import useOnScreen from "Utility/useOnScreen";
import bitmoji from "Images/bitmoji.png";
import computerHappyFace from "Images/computer-happy-face.png";
import computerNoFace from "Images/computer-no-face.png";
import flaskBook from "Images/flask-book.png";
import logo__project__liberty from "Images/Logos/Projects/logo__project__liberty.png";
import logo__project__skilltrain from "Images/Logos/Projects/logo__project__skilltrain.png";
import logo__technology__aws from "Images/Logos/Technologies/logo__technology__aws.png";
import logo__technology__express from "Images/Logos/Technologies/logo__technology__express.png";
import logo__technology__mongo from "Images/Logos/Technologies/logo__technology__mongo.png";
import logo__technology__react from "Images/Logos/Technologies/logo__technology__react.png";
import logo__technology__ubuntu from "Images/Logos/Technologies/logo__technology__ubuntu.png";
import logo__technology__flutter from "Images/Logos/Technologies/logo__technology__flutter.png";
import logo__technology__node from "Images/Logos/Technologies/logo__technology__node.png";
import logo__technology__dart from "Images/Logos/Technologies/logo__technology__dart.png";

import { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "semantic-ui-css/semantic.min.css";
import { Image, Popup } from "semantic-ui-react";
import "./App.sass";
import VARIABLES from "./_variables.module.sass";

function App() {
  const titleAboutRef = useRef();
  const titleAboutOnScreen = useOnScreen(titleAboutRef);
  const titleProjectsRef = useRef();
  const titleProjectsOnScreen = useOnScreen(titleProjectsRef);
  const imageProjectsComputerRef = useRef();
  const imageProjectsComputerOnScreen = useOnScreen(imageProjectsComputerRef);
  const [imageProjectsComputerSrc, setImageProjectsComputerSrc] =
    useState(computerHappyFace);
  const titleArticlesRef = useRef();
  const titleArticlesOnScreen = useOnScreen(titleArticlesRef);

  useEffect(() => {
    imageProjectsComputerOnScreen
      ? setTimeout(() => {
          setTransitioning(true);
          if (imageProjectsComputerSrc === computerHappyFace)
            setImageProjectsComputerSrc(computerNoFace);
        }, 500)
      : setImageProjectsComputerSrc(computerHappyFace);
  }, [imageProjectsComputerOnScreen]);

  const [selectedProject, setSelectedProject] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (transitioning) setTimeout(() => setTransitioning(false), 600);
  }, [transitioning]);

  return (
    <div className="Portfolio-Site">
      <div className="stars">
        {Array(parseInt(VARIABLES["number-of-stars"]))
          .fill("")
          .map(() => (
            <div className="star">
              <div className="star-top" />
              <div className="star-bottom" />
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
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
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
        <h2
          className={titleAboutOnScreen ? "slide-out-shadow" : ""}
          ref={titleAboutRef}
        >
          About
        </h2>
        <div className="side-container side-container--left-dominant">
          <div className="left">
            <div className="side-container__about">
              <div>
                <div className="flag flag--UK" />
                <p>
                  <span>🏠 London</span>
                  <span>🎓 St Andrews</span>
                </p>
              </div>
              <div>
                <div className="flag flag--JP" />
                <p>
                  <span>💼Software Engineer</span>
                  <span> 📍 関東 </span>
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={flaskBook} />
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <h2
          className={titleProjectsOnScreen ? "slide-out-shadow" : ""}
          ref={titleProjectsRef}
        >
          Projects
        </h2>
        <div className="side-container side-container--right-dominant">
          <div className="left">
            <img
              className="computer"
              src={imageProjectsComputerSrc}
              ref={imageProjectsComputerRef}
            />
            <div className="computer__projects">
              <div className="noise">
                <div
                  className="noisy"
                  style={transitioning ? {} : { visibility: "hidden" }}
                />
                <svg>
                  <filter id="noise">
                    <feTurbulence id="turbulence">
                      <animate
                        attributeName="baseFrequency"
                        dur="50s"
                        values="0.9 0.9;0.8 0.8; 0.9 0.9"
                        repeatCount="indefinite"
                      />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="60" />
                  </filter>
                </svg>
              </div>
              <div
                className="items"
                style={transitioning ? { display: "none" } : {}}
              >
                <Carousel
                  className="carousel-root--projects--logo"
                  selectedItem={selectedProject}
                  showThumbs={false}
                  showArrows={false}
                  showStatus={false}
                  showIndicators={false}
                  transitionTime={600}
                >
                  <div>
                    <img
                      className="computer__project"
                      src={logo__project__liberty}
                    />
                  </div>
                  <div>
                    <img
                      className="computer__project"
                      src={logo__project__skilltrain}
                    />
                  </div>
                  <div>Fruity</div>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="right">
            <div>
              <Carousel
                className="carousel--projects--blurb"
                onChange={(index) => {
                  setSelectedProject(index);
                  setTransitioning(true);
                }}
                transitionTime={600}
              >
                <div className="carousel__project">
                  <h1>Liberty</h1>
                  <div className="carousel__project__technologies">
                    <img src={logo__technology__ubuntu} />
                    <img src={logo__technology__mongo} />
                    <img src={logo__technology__node} />
                    <img src={logo__technology__express} />
                    <img src={logo__technology__react} />
                  </div>
                  <p>
                    A website serving as a portal to a business-facing online 3D
                    exhibition MMO game, complete with various social media
                    capabilities, customer service integration, game file
                    editor, and more. Sole responsibility for the entire
                    site/stack. Technologies Used: javascript, react, node,
                    html, css, jest, joi, linux (ubuntu dist), ssh (key
                    management), mongo, ssl, git, npm. Highlights include: A
                    chat system with email notifications and file embedding. A
                    dynamic svg editor for game admins to manipulate an in-game
                    map in real-time. A news feed with a WYSIWYG text editor
                    including locale support etc.
                  </p>
                </div>
                <div className="carousel__project">
                  <h1>SkillTrain</h1>
                  <div className="carousel__project__technologies">
                    <img src={logo__technology__aws} />
                    <img src={logo__technology__mongo} />
                    <img src={logo__technology__dart} />
                    <img src={logo__technology__flutter} />
                  </div>
                  <p>
                    A mobile based full-stack application with an inhouse
                    booking system alongside real time video and text chat for
                    fitness In-depth authentication system in Dart with
                    connection to AWS Cognito via Amplify. Completed integration
                    of a payment API (Stripe) with full signups, payments, and
                    payouts deployed to AWS. Payments through Android native
                    pay, iOS native pay, or an in-app window. Demonstration
                    (YouTube): Introduction Demo
                  </p>
                </div>
                <div className="carousel__project">
                  <div className="carousel__project__technologies">
                    <img src={logo__technology__node} />
                    <img src={logo__technology__express} />
                    <img src={logo__technology__react} />
                  </div>
                  <div>Fruity</div>
                  <p>
                    A browser based application where users can group up and
                    import a large crate of an exotic food to split with other
                    locals who want a piece of the action Solo project with
                    Express server built and deployed on Heroku.
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--light">
        <h2
          className={titleArticlesOnScreen ? "slide-out-shadow" : ""}
          ref={titleArticlesRef}
        >
          Articles
        </h2>
        <div>{/* <Carousel src={}></Carousel> */}</div>
      </section>
    </div>
  );
}

export default App;
