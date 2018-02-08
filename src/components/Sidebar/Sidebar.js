import React from 'react';

import './Sidebar.css';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-container">
      <div className="sidebar-profile">
        <img className="sidebar-profile-photo" src="images/photo.jpeg" alt="Profile photo" />
        <h1 className="sidebar-profile-name">Maria Bazhlekova</h1>
        <h2 className="sidebar-profile-title">Software Developer</h2>
      </div>
      <nav className="block sidebar-menu">
        <ul>
          <li className="active">
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skils</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="okaydeveloper.com">Blog</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
        </ul>
        <div className="block sidebar-social">
          <p className="sidebar-social-title">Find me around the web</p>
          <div className="sidebar-social-icons">
            <a href="https://github.com/mbazhlekova">
              <i className="fa fa-github-square fa-2x" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/maria-bazhlekova/">
              <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  </aside>
);

export default Sidebar;
