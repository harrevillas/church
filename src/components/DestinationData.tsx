import React, { Component } from "react";
import "./DestinationStyles.css";
import Quiapo1 from "../assets/quiapo1.jpg";
import Quiapo2 from "../assets/quiapo2.jpg";

interface DestinationProps {
  className: string;
  heading: string;
  text: string;
  img1: string;
  img2: string;
}

class DestinationData extends Component<DestinationProps> {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
