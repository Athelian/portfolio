import "./Slides.sass";
import Project from "Components/Project.js";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import computer from "Images/computer.png";
import logo__project__liberty from "Images/Logos/Projects/logo__project__liberty.png";
import logo__project__skilltrain from "Images/Logos/Projects/logo__project__skilltrain.png";

const Slides = (props) => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (transitioning) setTimeout(() => setTransitioning(false), 600);
  }, [transitioning]);

  return (
    <div className="Slides">
      <div className="Slide">
        <h2>About</h2>
      </div>
      <div className="Slide">
        <div>
          <Carousel
            className="carousel--projects--blurb"
            onChange={(index) => {
              setSelectedProject(index);
              setTransitioning(true);
            }}
            selectedItem={selectedProject}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            transitionTime={600}
          >
            <Project
              description="A website serving as a portal to a business-facing online 3D
                    exhibition MMO game, complete with various social media
                    capabilities, customer service integration, game file
                    editor, and more. Sole responsibility for the entire
                    site/stack. Technologies Used: javascript, react, node,
                    html, css, jest, joi, linux (ubuntu dist), ssh (key
                    management), mongo, ssl, git, npm. Highlights include: A
                    chat system with email notifications and file embedding. A
                    dynamic svg editor for game admins to manipulate an in-game
                    map in real-time. A news feed with a WYSIWYG text editor
                    including locale support etc."
              technologies={["ubuntu", "mongo", "node", "express", "react"]}
              title="Liberty"
            />
            <Project
              description="A mobile based full-stack application with an inhouse
                    booking system alongside real time video and text chat for
                    fitness In-depth authentication system in Dart with
                    connection to AWS Cognito via Amplify. Completed
                    integration of a payment API (Stripe) with full signups,
                    payments, and payouts deployed to AWS. Payments through
                    Android native pay, iOS native pay, or an in-app window.
                    Demonstration (YouTube): Introduction Demo"
              technologies={["aws", "mongo", "dart", "flutter", "react"]}
              title="SkillTrain"
            />
            <Project
              description="A website serving as a portal to a business-facing online 3D
                    exhibition MMO game, complete with various social media
                    capabilities, customer service integration, game file
                    editor, and more. Sole responsibility for the entire
                    site/stack. Technologies Used: javascript, react, node,
                    html, css, jest, joi, linux (ubuntu dist), ssh (key
                    management), mongo, ssl, git, npm. Highlights include: A
                    chat system with email notifications and file embedding. A
                    dynamic svg editor for game admins to manipulate an in-game
                    map in real-time. A news feed with a WYSIWYG text editor
                    including locale support etc."
              technologies={["node", "express", "react"]}
              title="Fruity"
            />
          </Carousel>
          <img className="computer" src={computer} />
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

                  <img className="computer__project" src={logo__project__liberty}/>
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
      </div>
      <div className="Slide" />
      <div className="Slide" />
      <div className="Slide" />
    </div>
  );
};

export default Slides;
