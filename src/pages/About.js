import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const About = () => {
    return(
        <div>
        <AppBar position="static">
            <Typography variant="h6">
            About Page
            </Typography>
        </AppBar>
        <div>
            Content About Page
        </div>
    </div>
    )
}

export default About;