import React from "react";
import Hornedbeasts from "./Hornedbeasts";
import data from "./data.json";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "all" };
  }

  hornsChoosen = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
            <Form.Label>How Many Horns?</Form.Label>
            <Form.Control as="select" custom onChange={this.hornsChoosen}>
              <option value="all">All</option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="Three">Three</option>
              <option value="100">Woow..</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Container>
          <Row xs={1} md={3} className="g-4">
            {data
              .filter((item) => {
                if (this.state.value === "all") {
                  return true;
                } else if (this.state.value === "one") {
                  return item.horns === 1;
                } else if (this.state.value === "two") {
                  return item.horns === 2;
                } else if (this.state.value === "three") {
                  return item.horns === 3;
                } else {
                  return item.horns === 100;
                }
              })
              .map((item) => {
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
      </>
    );
  }
}
export default Main;
