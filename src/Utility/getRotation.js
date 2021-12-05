import VARIABLES from "../_variables.module.sass";

// const scrollYScale = process.env.REACT_APP_SCROLL_Y_SCALE;
const scrollYScale = 0.1

const numberOfProjects = parseInt(VARIABLES["number-of-projects"]); // Number of projects currently on site
const numberOfSlides = parseInt(VARIABLES["number-of-slides"]);
const initialRotation = parseInt(VARIABLES["starting-rotation"]);
const slideRotationInterval = parseFloat(VARIABLES["slide-rotation-interval"]);
const slideRotationIntervalPercentage = parseFloat(VARIABLES["slide-rotation-interval-percentage"]);
const totalRotationInterval = parseInt(VARIABLES["total-rotation-interval"]);

const totalRotations = parseInt(VARIABLES["total-rotations"]);
const totalRotationIntervalPercentage = parseFloat(VARIABLES["total-rotation-interval-percentage"]);

const scrollYProjectStart = totalRotationIntervalPercentage; // starts at like 25%
const scrollYProjectEnd =
  scrollYProjectStart + (numberOfProjects * totalRotationIntervalPercentage);
const addedDeadScroll = scrollYProjectEnd - scrollYProjectStart; // Nothing has moved but yScroll has increased

const getRotation = ({ scrollYPercentage, slidesOrPlanet }) => {
  const scrollYDeg = (scrollYPercentage / 100) * 360
  const isSlides = slidesOrPlanet === "slides" ? true : false
  // console.log("scrollYProjectStart", scrollYProjectStart)
  // console.log("scrollYProjectEnd", scrollYProjectEnd)

  if (scrollYPercentage < scrollYProjectStart) {
    // In general should rotate by the percentage of window scroll
    return initialRotation - scrollYDeg * (totalRotations / numberOfSlides)
  } else if (scrollYPercentage > scrollYProjectStart && scrollYPercentage < scrollYProjectEnd) {
    return initialRotation - slideRotationInterval
  } else if (scrollYPercentage > scrollYProjectEnd) {
    const addedDeadScrollDeg = (addedDeadScroll / 100) * 360
    const degDeadScrollAdjusted = scrollYDeg - addedDeadScrollDeg;
    const finalRotation = (degDeadScrollAdjusted * (totalRotations / numberOfSlides))
    return initialRotation - finalRotation
    // return initialRotation - (scrollYPercentage - addedDeadScroll) / (scrollYScale / (isSlides ? 1 : numberOfSlides));
  }
};

export default getRotation
