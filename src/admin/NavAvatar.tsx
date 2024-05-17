import React from 'react';
import { NavLink } from 'react-router-dom';

function NavAvatar() {
  return (
    <li className="nav-item dropdown pe-3">
      <a 
        className="nav-link nav-profile d-flex align-items-center pe-0"
        href="#"
        data-bs-toggle="dropdown"
      >
        <i className="bi bi-person-circle" style={{ fontSize: '1.5rem' }}></i>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li>
          <NavLink to="/" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-box-arrow-right"></i>
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar;
