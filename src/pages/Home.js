import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const Home = () => {
    return(<div>
        <AppBar position="static">
            <Typography variant="h6">
            Home Page
            </Typography>
        </AppBar>
        <div>
            Content Home Page
        </div>
    </div>)
}

export default Home;