import React from 'react'
import './SideBar.css';
import {Link, NavLink } from 'react-router-dom';
import navList from '../data/NavItem';
import Navitem from './Navitem';

function SideBar() {
  return <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebaar-nav">
        <li className="nav-item">
            <a className="nav-link" href="/admin">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
            </a>
        </li>

        <li className="nav-item">
            <a
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
            >
            <i className="bi bi-menu-button-wide"></i>
            <span>Content Management</span>
            <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
                id="components-nav"
                className="nav-content collapse"
                data-bs-parents="#sidebar-nav"
                >
                    <li>
                        <a href="/admin#home">
                            <i className="bi bi-circle"></i>
                        <NavLink to="/members" className="nav-link">Members</NavLink>
                        </a>
                </li>
                <li>
                    <a href="#about">
                        <i className="bi bi-circle"></i>
                        <NavLink to="/addmember" className="nav-link">Add Member</NavLink>
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <i className="bi bi-circle"></i>
                        <NavLink to="/editmember/:id" className="nav-link">Edit Member</NavLink>
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <i className="bi bi-circle"></i>
                        <NavLink to="/announcement" className="nav-link">Announcement</NavLink>
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <i className="bi bi-circle"></i>
                        <NavLink to="/addannouncement" className="nav-link">Add Announcement</NavLink>
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <i className="bi bi-circle"></i>
                        <NavLink to="/editannouncement" className="nav-link">Edit Announcement</NavLink>
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <i className="bi bi-circle"></i>
                        <NavLink to="/event" className="nav-link">Events</NavLink>
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <i className="bi bi-circle"></i>
                        <NavLink to="/addevent" className="nav-link">Add Events</NavLink>
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <i className="bi bi-circle"></i>
                        <NavLink to="/prayerrequestlist" className="nav-link">Prayer Request List</NavLink>
                    </a>
                </li>
            </ul>
        </li>
    
    </ul>
  </aside>; 
}

export default SideBar;