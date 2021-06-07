import React from "react";
import Hornedbeasts from "./hornedbeasts";
import data from "./data.json";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

class Main extends React.Component {
  render() {
    return (
      <Container>
        <Row xs={1} md={3} className="g-4">
          {data.map((item) => {
            return (
              <Hornedbeasts
                title={item.title}
                description={item.description}
                image_url={item.image_url}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default Main;
