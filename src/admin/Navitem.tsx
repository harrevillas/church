import React from 'react';

interface NavItemProps {
  nav: {
    icon: string;
    name: string;
    // Add other properties if necessary
  };
}

function Navitem({ nav }: NavItemProps) {
  return (
    <li className="nav-item">
      <a className="nav-link collapsed" href="#">
        <i className={nav.icon}></i>
        <span>{nav.name}</span>
      </a>
    </li>
  );
}

export default Navitem;
