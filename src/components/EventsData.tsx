import "./EventsStyles.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


interface EventsProps {
  image: string;
  heading: string;
  text: string;
}

function EventsData(props: EventsProps) {
  return (
    <div className="e-card">
      <div className="e-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default EventsData;
