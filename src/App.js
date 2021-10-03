import about from "Images/about.png";
import bitmoji from "Images/bitmoji.png";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image, List, Popup } from "semantic-ui-react";
import "./App.css";

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
      <div id="tridiv" className="planet">
        <div
          className="scene"
          style={{
            WebkitTransform: "rotateX(-20deg) rotateY(-367deg)",
            msTransform: "rotateX(-20deg) rotateY(-367deg)",
            transform: "rotateX(-20deg) rotateY(-367deg)",
          }}
        >
          <div className="hemisphere">
          <>
            <div className="shape prism-1 pri-1">
              <div className="face ft">
                <div className="photon-shader" />
              </div>
              <div className="face bk">
                <div className="photon-shader" />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" />
              </div>
            </div>
            <div className="shape cuboid-1 cub-1">
              <div className="face ft">
                <div className="photon-shader" />
              </div>
              <div className="face bk">
                <div className="photon-shader" />
              </div>
              <div className="face rt">
                <div className="photon-shader" />
              </div>
              <div className="face lt">
                <div className="photon-shader" />
              </div>
              <div className="face bm">
                <div className="photon-shader" />
              </div>
              <div className="face tp">
                <div className="photon-shader" />
              </div>
              <div className="cr cr-0">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-1">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-2">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-3">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
            </div>
            <div className="shape prism-2 pri-2">
              <div className="face ft">
                <div className="photon-shader" />
              </div>
              <div className="face bk">
                <div className="photon-shader" />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" />
              </div>
            </div>
            <div className="shape prism-3 pri-3">
              <div className="face ft">
                <div className="photon-shader" />
              </div>
              <div className="face bk">
                <div className="photon-shader" />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" />
              </div>
            </div>
            <div className="shape cuboid-2 cub-2">
              <div className="face ft">
                <div className="photon-shader" />
              </div>
              <div className="face bk">
                <div className="photon-shader" />
              </div>
              <div className="face rt">
                <div className="photon-shader" />
              </div>
              <div className="face lt">
                <div className="photon-shader" />
              </div>
              <div className="face bm">
                <div className="photon-shader" />
              </div>
              <div className="face tp">
                <div className="photon-shader" />
              </div>
              <div className="cr cr-0">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-1">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-2">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-3">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
            </div>
            <div className="shape cuboid-3 cub-3">
              <div className="face ft">
                <div className="photon-shader" />
              </div>
              <div className="face bk">
                <div className="photon-shader" />
              </div>
              <div className="face rt">
                <div className="photon-shader" />
              </div>
              <div className="face lt">
                <div className="photon-shader" />
              </div>
              <div className="face bm">
                <div className="photon-shader" />
              </div>
              <div className="face tp">
                <div className="photon-shader" />
              </div>
              <div className="cr cr-0">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-1">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-2">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-3">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
            </div>
            <div className="shape cuboid-4 cub-4">
              <div className="face ft">
                <div className="photon-shader" />
              </div>
              <div className="face bk">
                <div className="photon-shader" />
              </div>
              <div className="face rt">
                <div className="photon-shader" />
              </div>
              <div className="face lt">
                <div className="photon-shader" />
              </div>
              <div className="face bm">
                <div className="photon-shader" />
              </div>
              <div className="face tp">
                <div className="photon-shader" />
              </div>
              <div className="cr cr-0">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-1">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-2">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-3">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
            </div>
            <div className="shape cuboid-5 cub-5">
              <div className="face ft">
                <div className="photon-shader" />
              </div>
              <div className="face bk">
                <div className="photon-shader" />
              </div>
              <div className="face rt">
                <div className="photon-shader" />
              </div>
              <div className="face lt">
                <div className="photon-shader" />
              </div>
              <div className="face bm">
                <div className="photon-shader" />
              </div>
              <div className="face tp">
                <div className="photon-shader" />
              </div>
              <div className="cr cr-0">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-1">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-2">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
              <div className="cr cr-3">
                <div className="face side s0">
                  <div className="photon-shader" />
                </div>
                <div className="face side s1">
                  <div className="photon-shader" />
                </div>
                <div className="face side s2">
                  <div className="photon-shader" />
                </div>
              </div>
            </div>
          </>
          </div>
        </div>
      </div>
      {/* <div>
        {Earth}
      </div> */}
      {/* <section className="section section--pink">
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
      </section> */}
      <section className="section section--white"></section>
    </div>
  );
}

export default App;
