import React, {useState, useEffect, useRef} from 'react';
import BaseLayout from "./_Layout/BaseLayout";

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


import "./pageStyles.css";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [offset, setOffset] = useState(6);
    const loadMoreButtonRef = useRef(null);

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

      useEffect(() =>{
        smoothScroll();
      },[offset])

      const smoothScroll = () => {
        loadMoreButtonRef.current.scrollIntoView({ behavior:"smooth", block:"center"});

        return;

        // const scrollToElement = document.querySelector("#loadMoreButton");

        // scrollToElement.scrollIntoView({
        //   behavior: "smooth",
        //   block: "center",
        // });
      };

      const loadMoreHandler = () => {
        setOffset(offset+3);
      };

    return(
        <BaseLayout>
        <div className="page-content-container">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <h1>Home Page</h1>
              </Card>
            </Grid>
            {posts.slice(0, offset).map((post, index) => (
              <Grid key={post.id} item xs={4}>
                <Card style={{height:250}}>
                  <CardHeader title={post.title}></CardHeader>
                  <CardContent>{post.body}</CardContent>
                </Card>
              </Grid>
          ))}
          </Grid>
          <Grid container spacing={3} justify='center'>
            <Button onClick={loadMoreHandler} id="loadMoreButton" ref={loadMoreButtonRef}>
              <p style={{fontSize: 22, color: "white"}}>Load More ...</p>
            </Button>
          </Grid>
        </div>
        </BaseLayout>
    );
};

export default Home;