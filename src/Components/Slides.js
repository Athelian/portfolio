import Project from "Components/Project.js";
import computer from "Images/computer.png";
import logo__project__fruity from "Images/Logos/Projects/logo__project__fruity.png";
import logo__project__liberty from "Images/Logos/Projects/logo__project__liberty.png";
import logo__project__portfolioSite from "Images/Logos/Projects/logo__project__portfolio-site.png";
import logo__project__skilltrain from "Images/Logos/Projects/logo__project__skilltrain.png";
import logo__project__zenport from "Images/Logos/Projects/logo__project__zenport.png";
import mail from "Images/mail.png";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Grid, Popup, Rating } from "semantic-ui-react";
import getRotation from "Utility/getRotation";
import VARIABLES from "../_variables.module.sass";
import "./Slides.sass";

const numberOfProjects = parseInt(VARIABLES["number-of-projects"]);
const numberOfSlides = parseInt(VARIABLES["number-of-slides"]);
const totalRotationIntervalPercentage = parseFloat(
  VARIABLES["total-rotation-interval-percentage"]
);

const scrollYProjectStart = totalRotationIntervalPercentage * 2;
const scrollYProjectEnd =
  scrollYProjectStart + numberOfProjects * totalRotationIntervalPercentage;

const Slides = (props) => {
  const { scrollYPercentage } = props;
  const rotation = getRotation({ scrollYPercentage, slidesOrPlanet: "slides" });
  const [selectedProject, setSelectedProject] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (transitioning) setTimeout(() => setTransitioning(false), 600);
  }, [transitioning]);

  if (
    scrollYPercentage > scrollYProjectStart &&
    scrollYPercentage < scrollYProjectEnd
  ) {
    let i = numberOfProjects;
    while (i) {
      const projectIndex = numberOfProjects - i;
      // * totalRotationIntervalPercentage as this is the percentage rotation required for all slides/projects
      const limit =
        scrollYProjectStart +
        (projectIndex + 1) * totalRotationIntervalPercentage;
      if (scrollYPercentage < limit) {
        if (selectedProject !== projectIndex) {
          setSelectedProject(projectIndex);
          setTransitioning(true);
        }
        break;
      }
      i--;
    }
  }

  return (
    <div className="Slides" style={{ transform: `rotate(${rotation}deg)` }}>
      {Array(numberOfSlides)
        .fill("")
        .map((_, i) => (
          <div className="Slide">
            {i === 0 ? (
              <div className="Slide__Inner Slide__Inner--About">
                <h4>
                  Hi, I'm Eliot.
                  <span>
                    I'm a fullstack engineer with a focus on JavaScript and the
                    latest trends in tech.
                  </span>
                  <span>
                    You can read about my work on Medium, or check out my most
                    recent projects on Github.
                  </span>
                </h4>
              </div>
            ) : i === 2 ? (
              <div className="Slide__Inner Slide__Inner--Projects">
                <Carousel
                  className="carousel-root--projects carousel-root--projects--blurb"
                  selectedItem={selectedProject}
                  showThumbs={false}
                  showArrows={false}
                  showStatus={false}
                  showIndicators={false}
                  transitionTime={600}
                >
                  <Project
                    description={
                      <>
                        <div>
                          A SAAS web application serving industry leaders
                          bespoke supply chain management solutions.
                        </div>
                        <br />
                        <a href="https://zenport.io/" target="_blank">
                          zenport.io
                        </a>
                      </>
                    }
                    technologies={[
                      "typescript",
                      "flowtype",
                      "apollo",
                      "graphql",
                      "react"
                    ]}
                    title="Zenport"
                  />
                  <Project
                    description={
                      <>
                        <div>
                          A website serving as a portal to a business-facing
                          online 3D exhibition MMO game.
                        </div>
                        <br />
                        <a href="https://www.liberty-hjc.com/" target="_blank">
                          liberty-hjc.com
                        </a>
                      </>
                    }
                    technologies={["mongo", "node", "express", "react"]}
                    title="Liberty"
                  />
                  <Project
                    description={
                      <>
                        <div>
                          An intelligent assistant for managing your social
                          media presence.
                        </div>
                        <br />
                        <a href="https://snai.site/" target="_blank">
                          snai.site
                        </a>
                      </>
                    }
                    technologies={["t3"]}
                    title="Snai"
                  />
                  <Project
                    description={
                      <>
                        <div>
                          A mobile based full-stack application with an inhouse
                          booking system alongside real time video and text chat
                          for fitness.
                        </div>
                        <br />
                        <a
                          href="https://github.com/skilltrain/skilltrain-app"
                          target="_blank"
                        >
                          github.com/skilltrain/skilltrain-app
                        </a>
                      </>
                    }
                    technologies={["aws", "mongo", "dart", "flutter", "react"]}
                    title="SkillTrain"
                  />
                  <Project
                    description={
                      <>
                        <div>
                          A browser based application where users can group up
                          and import a large crate of exotic food to split with
                          other locals who want a piece of the action.
                        </div>
                        <br />
                        <a
                          href="https://github.com/Athelian/fruity"
                          target="_blank"
                        >
                          github.com/athelian/fruity
                        </a>
                      </>
                    }
                    technologies={["node", "express", "react"]}
                    title="Fruity"
                  />
                  <Project
                    description="The website you are looking at, created with 3d CSS and powered by SASS"
                    technologies={["react", "sass"]}
                    title="This Site"
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
                      className="carousel-root--projects carousel-root--projects--logo"
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
                          src={logo__project__zenport}
                        />
                      </div>
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
                      <div>
                        <img
                          className="computer__project"
                          src={logo__project__fruity}
                        />
                      </div>
                      <div>
                        <img
                          className="computer__project"
                          src={logo__project__portfolioSite}
                        />
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            ) : i == 1 ? (
              <div className="Slide__Inner Slide__Inner--Skills">
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column>TypeScript</Grid.Column>
                    <Grid.Column>
                      <Rating
                        disabled={true}
                        defaultRating={5}
                        maxRating={5}
                        icon={"star"}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>Golang</Grid.Column>
                    <Grid.Column>
                      <Rating
                        disabled={true}
                        defaultRating={3}
                        maxRating={5}
                        icon={"star"}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>PHP</Grid.Column>
                    <Grid.Column>
                      <Rating
                        disabled={true}
                        defaultRating={3}
                        maxRating={5}
                        icon={"star"}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>Scala</Grid.Column>
                    <Grid.Column>
                      <Rating
                        disabled={true}
                        defaultRating={2}
                        maxRating={5}
                        icon={"star"}
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            ) : (
              <div className="Slide__Inner Slide__Inner--Contact">
                <img src={mail} />
                <a href="mailto:ejaustinforbes@gmail.com">
                  ejaustinforbes@gmail.com
                </a>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Slides;
