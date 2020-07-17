import React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const BaseLayout = ({children}) => {
    return(
    <div>
        <AppBar position="static" className="app-bar">
            <Typography variant="h6">
            <NavLink exact to="/" className="nav-link" activeStyle={{
                color: "white"
                }}
            >Home</NavLink>
            <NavLink exact to="/about" className="nav-link" activeStyle={{
                color: "white"
                }}
            >About</NavLink>
            </Typography>
        </AppBar>
        {children}
    </div>
    )
};

export default BaseLayout;