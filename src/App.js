import Earth from "Components/Planets/Variants/Earth/Earth";
import bitmoji from "Images/bitmoji.png";
import "semantic-ui-css/semantic.min.css";
import { Image, Popup } from "semantic-ui-react";
import "./App.sass";
import flaskBook from "Images/flask-book.png";
import computerHappyFace from "Images/computer-happy-face.png";
import computerNoFace from "Images/computer-no-face.png";
import liberty from "Images/liberty.png";
import logo__ubuntu from "Images/logo__ubuntu.png";
import logo__mongo from "Images/logo__mongo.png";
import logo__skilltrain from "Images/logo__skilltrain.png";
import logo__fruity from "Images/logo__fruity.png";
import { useEffect, useRef, useState } from "react";
import VARIABLES from "./_variables.module.sass";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function App() {
  const titleAboutRef = useRef(null);
  const [titleAboutInView, setTitleAboutInView] = useState(false);
  const projectRef = useRef(null);
  const [projectsInView, setProjectsInView] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) setTitleAboutInView(true);
      else setTitleAboutInView(false);
    });
    titleAboutRef.current && observer.observe(titleAboutRef.current);
    return () =>
      titleAboutRef.current && observer.unobserve(titleAboutRef.current);
  }, [titleAboutRef]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) setProjectsInView(true);
      else setProjectsInView(false);
    });
    projectRef.current && observer.observe(projectRef.current);
    return () => projectRef.current && observer.unobserve(projectRef.current);
  }, [projectRef]);

  useEffect(() => {
    setTimeout(() => setTransitioning(false), 600);
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
          className={titleAboutInView ? "slide-out-shadow" : ""}
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
          className={projectsInView ? "slide-out-shadow" : ""}
          ref={projectRef}
        >
          Projects
        </h2>
        <div className="side-container side-container--right-dominant">
          <div className="left">
            <img className="computer" src={computerNoFace} />
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
                    <img className="computer__project" src={liberty} />
                  </div>
                  <div>
                    <img className="computer__project" src={logo__skilltrain} />
                  </div>
                  <div>Fruity</div>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="right">
            <Carousel
              onSwipeStart={() => console.log(1)}
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
                  <img src={logo__ubuntu} />
                  <img src={logo__mongo} />
                  <img src={logo__ubuntu} />
                  <img src={logo__ubuntu} />
                </div>
                <p>
                  A website serving as a portal to a business-facing online 3D
                  exhibition MMO game, complete with various social media
                  capabilities, customer service integration, game file editor,
                  and more. Sole responsibility for the entire site/stack.
                  Technologies Used: javascript, react, node, html, css, jest,
                  joi, linux (ubuntu dist), ssh (key management), mongo, ssl,
                  git, npm. Highlights include: A chat system with email
                  notifications and file embedding. A dynamic svg editor for
                  game admins to manipulate an in-game map in real-time. A news
                  feed with a WYSIWYG text editor including locale support etc.
                </p>
                <p>
                  A website serving as a portal to a business-facing online 3D
                  exhibition MMO game, complete with various social media
                  capabilities, customer service integration, game file editor,
                  and more. Sole responsibility for the entire site/stack.
                  Technologies Used: javascript, react, node, html, css, jest,
                  joi, linux (ubuntu dist), ssh (key management), mongo, ssl,
                  git, npm. Highlights include: A chat system with email
                  notifications and file embedding. A dynamic svg editor for
                  game admins to manipulate an in-game map in real-time. A news
                  feed with a WYSIWYG text editor including locale support etc.
                </p>
              </div>
              <div className="carousel__project">
                <h1>SkillTrain</h1>
                <div className="carousel__project__technologies">
                  <img src={logo__ubuntu} />
                  <img src={logo__mongo} />
                  <img src={logo__ubuntu} />
                  <img src={logo__ubuntu} />
                </div>
                <p>
                  A mobile based full-stack application with an inhouse booking
                  system alongside real time video and text chat for fitness
                  In-depth authentication system in Dart with connection to AWS
                  Cognito via Amplify. Completed integration of a payment API
                  (Stripe) with full signups, payments, and payouts deployed to
                  AWS. Payments through Android native pay, iOS native pay, or
                  an in-app window. Demonstration (YouTube): Introduction Demo
                </p>
              </div>
              <div className="carousel__project">
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
      </section>
    </div>
  );
}

export default App;
