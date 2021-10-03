import { useCallback, useEffect, useRef, useState } from "react";
import "./Planet.sass";
import "./Variants/Earth.sass";

const Planet = ({ variant }) => {
  const box = useRef(null);

  const [animation, setAnimation] = useState({});
  const [rotationAngle, setRotationAngle] = useState(0);
  const [hoverActive, setHoverActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [angle, setAngle] = useState(0);
  const [startAngle, setStartAngle] = useState(0);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [boxCenterPoint, setBoxCenterPoint] = useState({});

  // method to get the positionof the pointer event relative to the center of the box
  const getPositionFromCenter = useCallback(
    (e) => {
      const fromBoxCenter = {
        x: e.clientX - boxCenterPoint["x"],
        y: -(e.clientY - boxCenterPoint["y"]),
      };
      return fromBoxCenter;
    },
    [boxCenterPoint]
  );

  const mouseDownHandler = (e) => {
    e.stopPropagation();
    const fromBoxCenter = getPositionFromCenter(e);
    const newStartAngle =
      90 -
      Math.atan2(Math.abs(fromBoxCenter.y), fromBoxCenter.x) * (180 / Math.PI);
    setStartAngle(newStartAngle);
    setIsActive(true);
  };

  const mouseUpHandler = useCallback(
    (e) => {
      e.stopPropagation();
      if (isActive) {
        const newCurrentAngle = currentAngle + (angle - startAngle);
        setIsActive(false);
        setCurrentAngle(newCurrentAngle);
        animation.cancel && animation.cancel();
        setHoverActive(false);
        setAnimation(
          box.current.animate(
            [
              // keyframes
              { transform: `rotateY(${newCurrentAngle}deg)` },
              { transform: `rotateY(${newCurrentAngle + 360}deg)` },
            ],
            {
              // timing options
              duration: 5000,
              iterations: Infinity,
            }
          )
        );
        
        // setRotationAngle(newCurrentAngle)
      }
    },
    [isActive, angle, currentAngle, startAngle]
  );

  const mouseMoveHandler = useCallback(
    (e) => {
      if (isActive) {
        const fromBoxCenter = getPositionFromCenter(e);
        const newAngle =
          90 -
          Math.atan2(Math.abs(fromBoxCenter.y), fromBoxCenter.x) *
            (180 / Math.PI);
        box.current.style.transform =
          "rotateY(" +
          (currentAngle + (newAngle - (startAngle ? startAngle : 0))) +
          "deg)";
        setAngle(newAngle);
      }
    },
    [isActive, currentAngle, startAngle, getPositionFromCenter]
  );

  useEffect(() => {
    const boxPosition = box.current.getBoundingClientRect();
    // get the current center point
    const boxCenterX = boxPosition.left + boxPosition.width / 2;
    const boxCenterY = boxPosition.top + boxPosition.height / 2;

    // update the state
    setBoxCenterPoint({ x: boxCenterX, y: boxCenterY });
  }, []);

  useEffect(() => {
    // in case the event ends outside the box
    window.onmouseup = mouseUpHandler;
    window.onmousemove = mouseMoveHandler;
  }, [mouseUpHandler, mouseMoveHandler]);

  return (
    <div
      className="planet"
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onMouseEnter={() => {
        const style = getComputedStyle(box.current);
        var transformString =
          style["-webkit-transform"] ||
          style["-moz-transform"] ||
          style["transform"];
        if (!transformString || transformString == "none") return 0;
        const splits = transformString.split(",");
        // parse the string to get a and b
        const parenLoc = splits[0].indexOf("(");
        const test = Math.acos(parseFloat(splits[0].substr(parenLoc + 1)));
        let deg = (180 * test) / Math.PI;
        if (parseFloat(splits[8]) < 0) deg = 360 - deg;
        box.current.style.transform = `rotateY(${deg}deg)`;
        box.current.style.animation = "null";
        box.current.style.animationPlayState = "pause";
        animation.cancel && animation.cancel();
        setRotationAngle(deg);
        setCurrentAngle(deg);
        setHoverActive(true)
      }}
      onMouseLeave={() => {
        if (!hoverActive) return;
        setAnimation(
          box.current.animate(
            [
              // keyframes
              { transform: `rotateY(${rotationAngle}deg)` },
              { transform: `rotateY(${rotationAngle + 360}deg)` },
            ],
            {
              // timing options
              duration: 5000,
              iterations: Infinity,
            }
          )
        );
      }}
    >
      <div className="sphere" ref={box}>
        <div className="hemisphere">
          {Array(1)
            .fill("")
            .map((v, i) => (
              <div className="face face__africa" key={i}>
                {Array(25)
                  .fill("")
                  .map((v, i) => (
                    <div className="land land__africa" key={i}>
                      <div />
                    </div>
                  ))}
              </div>
            ))}
          {
            <div className="face face__south_america">
              {Array(25)
                .fill("")
                .map((v, i) => (
                  <div className="land land__south_america" key={i}>
                    <div />
                  </div>
                ))}
            </div>
          }
        </div>
        <div className="hemisphere"></div>
      </div>
    </div>
  );
};

export default Planet;
