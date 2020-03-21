import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import VideoPreviewWrapper from './VideoPreviewWrapper';



function BodyContent({ isDrawerOpen }) {
  return (
    <div style={{ backgroundColor: '#ededed', minHeight: 'calc(100vh - 64px)' }}>
      <Grid container style={{ padding: 40 }}>
        <Grid item xs={12}>
          <Typography variant='h6' >Recomandations</Typography>
        </Grid>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => (
          <Grid item xs={3} key={x} style={{ padding: 20 }}>
            <VideoPreviewWrapper />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default BodyContent;