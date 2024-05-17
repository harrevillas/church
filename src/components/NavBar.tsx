import React, { Component } from "react";
import "./NavBarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
  state = { clicked: false };
  
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  
  render() {
    return (
      <nav className="NavBarItems">
        <h1 className="navbar-logo">CCC</h1>

        <div className="menu-icons" onClick={this.handleClick}>
            <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} />
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/signup" className="nav-links">
              <button className="signup-button">Sign Up</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
