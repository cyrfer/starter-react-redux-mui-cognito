import React from 'react';
import Layout from '../components/Layout';
import IFrame from '../components/IFrame';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const IFrameWrapper = ({classes, ...otherProps}) => {
  return (
    <div className={classes.root}>
<IFrame {...otherProps} />
    </div>
  )
}

const StyledIFrame = withStyles({
  root: {
    marginTop: '20px',
    maxWidth: '640px',
    height: '480px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '& > iframe': {
      width: '100%',
      height: '100%',
    }
  }
})(IFrameWrapper)

const Home = () => {
  return (
<Layout>
  <Grid container>
    <Grid item xs={12}>
      <StyledIFrame allowFullScreen={true} src={'https://www.youtube.com/embed/gybRIl3r4Dc'} />
    </Grid>
  </Grid>
</Layout>
  )
}

export default Home;
