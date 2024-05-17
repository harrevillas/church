import React, { useState } from 'react';
import './Logo.css';

function Logo() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleToggleSideBar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className='logo-container'>
            <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
                {/* Sidebar Content */}
            </div>
            <div className='logo-content'>
                <a href="/" className='logo d-flex align-items-center'>
                    {/* <img src="" alt=""/> */}
                    <span className='d-none d-lg-block'>Admin Dashboard</span>
                </a>
                <i
                    className='bi bi-list toggle-sidebar-btn'
                    onClick={handleToggleSideBar}
                ></i>
            </div>
        </div>
    );
}

export default Logo;
