import React, { Component } from "react";

class Band extends Component {
  handleDeleteBand = () => {
    this.props.delete(this.props.id);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <li>
          {this.props.name}
          <button onClick={this.handleDeleteBand}>Delete</button>
        </li>
      </div>
    );
  }
}

export default Band;
