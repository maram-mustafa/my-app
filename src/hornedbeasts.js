import React from "react";

class Hornedbeasts extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>  
        <img src={this.props.image_url} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Hornedbeasts;
