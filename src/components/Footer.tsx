import "./FooterStyles.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>CCC</h1>
          <p>In His Presence: A Home for Worship</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Others</h4>
          <a href="/"> Terms of Service </a>
          <a href="/"> Privacy Policy </a>
          <a href="/"> License </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
