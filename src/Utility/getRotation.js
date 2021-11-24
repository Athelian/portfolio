import VARIABLES from "../_variables.module.sass";

const scrollYScale = 8; // Arbitrary value

const numberOfProjects = parseInt(VARIABLES["number-of-projects"]); // Number of projects currently on site
const numberOfSlides = parseInt(VARIABLES["number-of-slides"]);
const initialRotation = parseInt(VARIABLES["starting-rotation"]);
const slideRotationInterval = parseInt(VARIABLES["slide-rotation-interval"]);

const projectRotationInterval = slideRotationInterval; // Project to slide scroll req ratio
const scrollYProjectStart = scrollYScale * slideRotationInterval; // Work backwards to find scrollY of start of project
const scrollYProjectEnd =
  scrollYProjectStart + 8 * (numberOfProjects * projectRotationInterval); // Likewise
const addedDeadScroll = scrollYProjectEnd - scrollYProjectStart; // Nothing has moved but yScroll has increased

const getRotation = ({ scrollY, slidesOrPlanet }) => {
  const isSlides = slidesOrPlanet === "slides" ? true : false

  if (scrollY < scrollYProjectStart) {
    return initialRotation - scrollY / (scrollYScale / (isSlides ? 1 : numberOfSlides));
  } else if (scrollY > scrollYProjectStart && scrollY < scrollYProjectEnd) {
    return initialRotation - (isSlides ? slideRotationInterval : 360)
  } else if (scrollY > scrollYProjectEnd) {
    return initialRotation - (scrollY - addedDeadScroll) / (scrollYScale / (isSlides ? 1 : numberOfSlides));
  }
};

export default getRotation
