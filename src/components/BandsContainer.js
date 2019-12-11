import React, { Component } from "react";
import BandInput from "./BandInput";
import { connect } from "react-redux";
import Bands from "./Bands";

class BandsContainer extends Component {
  render() {
    console.log(this.props.deleteBand);
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand} />
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

// payload: name and payload: id = name and id
const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id })
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
