import React from "react"
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import '../../styles/style.scss'

export const NavBar = () => {
  return (
    <nav>
      <AppBar position="static" className="appBar-header">
        <ul className="navbar-items-list">
          <li id="item-logo">
            <Link to="/">
              <div className="logo">
                <img src="https://www.realtor.com/realtor-com.png" />
              </div>
            </Link>
          </li>
          <li id='item-title'>
            <Typography variant="h4">
              Earthquake Zen Garden
            </Typography>
          </li>
          <li id="item-welcome-user">
            <Link to="/profile">
              Welcome Sally
            </Link>
          </li>
        </ul>
      </AppBar>
    </nav>
  )
}
