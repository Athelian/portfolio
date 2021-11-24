import VARIABLES from "../_variables.module.sass";

const scrollYScale = process.env.REACT_APP_SCROLL_Y_SCALE;

const numberOfProjects = parseInt(VARIABLES["number-of-projects"]); // Number of projects currently on site
const numberOfSlides = parseInt(VARIABLES["number-of-slides"]);
const initialRotation = parseInt(VARIABLES["starting-rotation"]);
const slideRotationInterval = parseInt(VARIABLES["slide-rotation-interval"]);

const scrollYProjectStart = scrollYScale * slideRotationInterval;
const scrollYProjectEnd =
  scrollYProjectStart + 8 * (numberOfProjects * slideRotationInterval);
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
