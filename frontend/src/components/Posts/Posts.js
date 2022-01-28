import React from "react";
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/post';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    // let  posts = [].concat.apply([], received_posts);
    const classes = useStyles();
    return (
        !posts.length ? <CircularProgress /> :
        (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                  <Post post={post} setCurrentId={setCurrentId}/>
                </Grid>
              ))}
            </Grid>
          )
    )
}

export default Posts;