import { Image, Card, Icon, List } from "semantic-ui-react";
import bitmoji from "Images/bitmoji.png";
import "semantic-ui-css/semantic.min.css";
import "./App.sass";
import about from "Images/About.png";

function App() {
  return (
    <div className="Portfolio-Site">
      <header>
        <h1>
          <div>
            Eliot
            <Image src={bitmoji} circular />
          </div>
          Austin-Forbes
        </h1>
      </header>
      <section className="section section--pink">
        <img className="section__header" src={about} />
        <Card.Group centered>
          <Card
            header="Rick Sanchez"
            meta="Scientist"
            description={[
              "Rick is a genius scientist whose alcoholism and reckless,",
              " nihilistic behavior are a source of concern for his family.",
              "Rick is a genius scientist whose alcoholism and reckless,",
              " nihilistic behavior are a source of concern for his family.",
              "Rick is a genius scientist whose alcoholism and reckless,",
              " nihilistic behavior are a source of concern for his family.",
              "Rick is a genius scientist whose alcoholism and reckless,",
              " nihilistic behavior are a source of concern for his family.",
              "Rick is a genius scientist whose alcoholism and reckless,",
              " nihilistic behavior are a source of concern for his family.",
              "Rick is a genius scientist whose alcoholism and reckless,",
              " nihilistic behavior are a source of concern for his family.",
            ].join("")}
          />
          <Card
            header="Rick Sanchez"
            meta="Scientist"
            description={[
              "Rick is a genius scientist whose alcoholism and reckless,",
              " nihilistic behavior are a source of concern for his family.",
              "Rick is a genius scientist whose alcoholism and reckless,",
              " nihilistic behavior are a source of concern for his family.",
              "Rick is a genius scientist whose alcoholism and reckless,",
              " nihilistic behavior are a source of concern for his family.",
              "Rick is a genius scientist whose alcoholism and reckless,",
              " nihilistic behavior are a source of concern for his family.",
              "Rick is a genius scientist whose alcoholism and reckless,",
              " nihilistic behavior are a source of concern for his family.",
              "Rick is a genius scientist whose alcoholism and reckless,",
              " nihilistic behavior are a source of concern for his family.",
            ].join("")}
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
                  He then studied at a highschool in Cambridge, before completing a master's degree 
                </List.Item>
              </List>
            }
          />
        </Card.Group>
      </section>
    </div>
  );
}

export default App;
