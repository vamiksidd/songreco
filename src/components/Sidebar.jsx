import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-nav">
        <div className="menu">
          {/* <p className="title">MENU</p> */}
          <ul>
            <li className="active">
              <NavLink to="/">
                <i className="ph-bold ph-house"></i>
                <span className="text">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/history">
                <i className="ph-bold ph-clock-counter-clockwise"></i>
                <span className="text">History</span>
                {/* <i className="arrow ph-bold ph-caret-down"></i> */}
              </NavLink>
            </li>
            <li>
              <NavLink to="/playlist">
                <i className="ph-bold ph-playlist"></i>
                <span className="text">Playlists</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/favourites">
                <i className="ph-bold ph-heart"></i>
                <span className="text">Favourites</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i className="ph-bold ph-sign-out"></i>
                <span className="text">Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="user-div">
        <div className="user-img">
          {/* <img src="user.jpg" alt="" /> */}
          <i className="ph ph-question"></i>
        </div>
        <div className="user-details">
          <p className="name">Sumit Rathor</p>
          <p className="user-email">user@gmail.com</p>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
