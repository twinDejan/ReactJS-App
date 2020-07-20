import React, {useState, useEffect} from 'react';
import BaseLayout from "./_Layout/BaseLayout";

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';


import "./pageStyles.css";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(
            (result) => {
              setPosts(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.log(error);
            }
          )
      }, [])
    return(
        <BaseLayout>
        <div className="page-content-container">
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
            <h1>Home Page</h1>
            </Card>
          </Grid>
          {posts.map((post, index) => (
            <Grid key={post.id} item xs={4}>
              <Card style={{height:250}}>
                <CardHeader title={post.title}></CardHeader>
                <CardContent>{post.body}</CardContent>
              </Card>
            </Grid>
          ))}
          </Grid>
        </div>
        </BaseLayout>
    );
};

export default Home;