import about from "Images/About.png";
import bitmoji from "Images/bitmoji.png";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image, List, Popup } from "semantic-ui-react";
import "./App.sass";

function App() {
  return (
    <div className="Portfolio-Site">
      <header>
        <h1>
          <div>
            Eliot
            <Image alt="bitmoji" circular src={bitmoji} />
          </div>
          Austin-Forbes
        </h1>
      </header>
      <div>
        <h3 className="introduction">
          I am a fullstack engineer with a focus on{" "}
          <Popup
            content={<h4>(M)ongo (E)xpress (R)eact (N)ode</h4>}
            trigger={<span>MERN</span>}
          />{" "}
          stacks
        </h3>
      </div>
      <div>
        {/* <div id="heart"></div> */}
        <div className="scene">
          <div className="sphere">
            <div className="hemisphere">
              <div className="face face__africa">
                {Array(100)
                  .fill("")
                  .map((v, i) => {
                    return (
                      <div
                        className={`land land__africa land__africa--${i}`}
                        key={i}
                        style={
                             {
                                width: `calc(100% - ${i * 0.1}%`,
                                height: `calc(100% - ${i * 0.1}%`,
                                transform: `translate(-50%, -50%) translateZ(calc(-2.4vmin + ${
                                  i * 0.01 * 2.4
                                }vmin))`,
                                backfaceVisibility:
                                  i < 20 ? "hidden" : "visible",
                              }
                        }
                      >
                        <div
                          style={
                            i < 40
                              ? { backgroundColor: "rgb(91, 161, 214)" }
                              : {}
                          }
                        ></div>
                        <div
                          style={
                            i < 40
                              ? { backgroundColor: "rgb(91, 161, 214)" }
                              : {}
                          }
                        ></div>
                      </div>
                    );
                  })}
              </div>

              {/* <div className="land land--2" />
                <div className="land land--3" /> */}
              {/* <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div> */}
            </div>
            <div className="hemisphere">
              {/* <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div> */}
              {/* <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div> */}
              {/* <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div>
              <div className="face face__land">
                <div className="land land--1" />
                <div className="land land--2" />
                <div className="land land--3" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <section className="section section--pink">
        <img alt="section header" className="section__header" src={about} />
        <Card.Group centered>
          <Card
            image={
              <Card.Content>
                <Card.Header>
                  Learner
                  <Card.Header />
                </Card.Header>
                <Card.Meta>Life</Card.Meta>
                <Icon color="purple" name="book" size="huge" />
              </Card.Content>
            }
            description={
              <List bulleted>
                <List.Item>
                  Eliot was born to David Forbes and Mary Austin at a modest
                  property in London in 1993.
                </List.Item>
                <List.Item>
                  He then studied at a highschool in Cambridge, before
                  completing a master's degree
                </List.Item>
              </List>
            }
          />
          <Card
            image={
              <Card.Content>
                <Card.Header>
                  Learner
                  <Card.Header />
                </Card.Header>
                <Card.Meta>Life</Card.Meta>
                <Icon color="purple" name="book" size="huge" />
              </Card.Content>
            }
            description={
              <List bulleted>
                <List.Item>
                  Eliot was born to David Forbes and Mary Austin at a modest
                  property in London in 1993.
                </List.Item>
                <List.Item>
                  He then studied at a highschool in Cambridge, before
                  completing a master's degree
                </List.Item>
              </List>
            }
          />
          <Card
            image={
              <Card.Content>
                <Card.Header>
                  Learner
                  <Card.Header />
                </Card.Header>
                <Card.Meta>Life</Card.Meta>
                <Icon color="purple" name="book" size="huge" />
              </Card.Content>
            }
            description={
              <List bulleted>
                <List.Item>
                  Eliot was born to David Forbes and Mary Austin at a modest
                  property in London in 1993.
                </List.Item>
                <List.Item>
                  He then studied at a highschool in Cambridge, before
                  completing a master's degree
                </List.Item>
              </List>
            }
          />
        </Card.Group>
      </section>
      <section className="section section--white"></section>
    </div>
  );
}

export default App;
