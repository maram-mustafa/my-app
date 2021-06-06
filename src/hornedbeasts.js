import React from "react";

class Hornedbeasts extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img src={this.props.image_url} />
      </div>
    );
  }
}

export default Hornedbeasts;
