import React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const BaseLayout = ({children}) => {
    return(
    <div>
        <AppBar position="static" className="app-bar">
            <Typography variant="h6">
            <NavLink exact to="/" className="nav-link" activeClassName="nav-link-active"
            >Home</NavLink>
            <NavLink exact to="/todo" className="nav-link" activeClassName="nav-link-active"
            >ToDo</NavLink>
            <NavLink exact to="/about" className="nav-link" activeClassName="nav-link-active"
            >About</NavLink>
            </Typography>
        </AppBar>
        {children}
    </div>
    )
};

export default BaseLayout;