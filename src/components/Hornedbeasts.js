import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";

class Hornedbeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfVote: 0,
    };
  }

  incrementNumOfVote = () => {
    this.setState({
      numOfVote: this.state.numOfVote + 1,
    });
  };

  render() {
    return (
      <Col>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            onClick={this.incrementNumOfVote}
            src={this.props.image_url}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>&#128147; = : {this.state.numOfVote}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Hornedbeasts;
