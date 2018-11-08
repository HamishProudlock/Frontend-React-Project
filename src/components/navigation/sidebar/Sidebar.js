import React from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = props => {
  let drawerClasses = 'sidebar';
  if (props.show) {
    drawerClasses = 'sidebar open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li onClick={props.click} >
          <NavLink to="/" style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'black', textDecoration: 'none'}} exact={true}>+  HOME</NavLink>
        </li>
        <li onClick={props.click} >
          <NavLink to="/signup" style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'black', textDecoration: 'none'}} exact={true}>+  SIGN IN</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

//
