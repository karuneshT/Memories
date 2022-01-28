import useStyles from './styles';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import memoryImg from './images/memories.png'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetch_posts } from './store/store';


function App() {
  const [currentId, setCurrentId] = useState(0);
  const classes =  useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetch_posts());
  },[currentId,dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position="static" color="inherit" >
        <Typography className={classes.heading} variant='h2' aligncontent='center'>Memories</Typography>
        <img className={classes.image} src={memoryImg} alt='memories' height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
