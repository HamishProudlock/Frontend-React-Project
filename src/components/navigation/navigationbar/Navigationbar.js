import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigationbar.css';

import SidebarButton from '../sidebar/SidebarButton';

const Navigationbar = props => (
  <header className="navigationbar">
    <nav className="navbar__navigation">
        <div>
          <SidebarButton click={props.drawerClickHandler} />
        </div>
          <div className="navbar__logo">
            <h1>
              <NavLink to="/" style={{color: '#474747', textDecoration: 'none'}} activeStyle={{color: '#474747', textDecoration: 'none'}} exact={true}>
                FUZZEL
              </NavLink>
            </h1>
          </div>
          <div className="spacer" />
          <div className="navbar_navigation-items">
            <ul>
              <li onClick={props.loginClickHandler}>SIGN IN</li>
            </ul>
         </div>
    </nav>
  </header>
);

export default Navigationbar;


//<NavLink to="/signup" style={{color: '#27b0f0', textDecoration: 'none'}} activeStyle={{color: '#27b0f0', textDecoration: 'none'}} exact={true}>SIGN IN</NavLink>
