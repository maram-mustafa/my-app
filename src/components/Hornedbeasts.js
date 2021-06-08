import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import SelectedBeast from "./SelectedBeast.js";

class Hornedbeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfVote: 0,
      showImg: false,
    };
  }

  incrementNumOfVote = () => {
    this.setState({
      numOfVote: this.state.numOfVote + 1,
    });
    this.open();
  };

  close = () => {
    this.setState({
      showImg: false,
    });
  };

  open = () => {
    this.setState({
      showImg: true,
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
          <SelectedBeast
            showImg={this.state.showImg}
            close={this.close}
            title={this.props.title}
            image_url={this.props.image_url}
            description={this.props.description}
          />
        </Card>
      </Col>
    );
  }
}

export default Hornedbeasts;
