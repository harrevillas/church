import React from 'react';
import './Main.css';
import PageTitle from './PageTitle';
import CCC from "../assets/CCC.jpg";; // Import your logo image

function Main() {
  return (
    <main id="main" className="main">
      <PageTitle page="Dashboard" />
      <div className="welcome-message">
        <img src={CCC} alt="Logo" className="logo" />
        <h2>Welcome, Admin!</h2>
      </div>
    </main>
  );
}

export default Main;
