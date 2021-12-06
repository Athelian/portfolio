import VARIABLES from "../_variables.module.sass";

const numberOfProjects = parseInt(VARIABLES["number-of-projects"]);
const numberOfSlides = parseInt(VARIABLES["number-of-slides"]);
const initialRotation = parseInt(VARIABLES["starting-rotation"]);
const slideRotationInterval = parseFloat(VARIABLES["slide-rotation-interval"]);
const totalRotations = parseInt(VARIABLES["total-rotations"]);
const totalRotationIntervalPercentage = parseFloat(
  VARIABLES["total-rotation-interval-percentage"]
);

const scrollYProjectStart = totalRotationIntervalPercentage * 2;
const scrollYProjectEnd =
  scrollYProjectStart + numberOfProjects * totalRotationIntervalPercentage;
const addedDeadScroll = scrollYProjectEnd - scrollYProjectStart; // Nothing has moved but yScroll has increased

const getRotation = ({ scrollYPercentage, slidesOrPlanet }) => {
  const scrollYDeg = (scrollYPercentage / 100) * 360;
  const isSlides = slidesOrPlanet === "slides" ? true : false;

  if (scrollYPercentage < scrollYProjectStart) {
    /*
     In general should rotate by the percentage of window scroll,
     planet does full rotation for every slide
    */
    return (
      initialRotation -
      scrollYDeg *
        (isSlides ? 1 : numberOfSlides) *
        (totalRotations / numberOfSlides)
    );
  } else if (
    scrollYPercentage > scrollYProjectStart &&
    scrollYPercentage < scrollYProjectEnd
  ) {
    // Halt at one full rotation
    return initialRotation - (isSlides ? slideRotationInterval * 2 : 720);
  } else if (scrollYPercentage > scrollYProjectEnd) {
    const addedDeadScrollDeg =
      ((addedDeadScroll * (isSlides ? 1 : numberOfSlides)) / 100) * 360;
    const degDeadScrollAdjusted =
      scrollYDeg * (isSlides ? 1 : numberOfSlides) - addedDeadScrollDeg;
    const finalRotation =
      degDeadScrollAdjusted * (totalRotations / numberOfSlides);
    return initialRotation - finalRotation;
  }
};

export default getRotation;
