import React from 'react';
import { Typography, Avatar } from '@material-ui/core';
import imgProfile from './Sans titre-2.png'

function VideoPreview({img}) {

  return (
    <div>
      <div style={{ backgroundImage : `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 200, marginBottom : 20 }} />
      <div style={{display : 'flex'}}>
        <Avatar alt='dd' src={imgProfile} />
        <div style={{paddingLeft : 10}}>
          <Typography variant='subtitle2' style={{ textOverflow: 'ellipsis', }} >Some shitty title</Typography>
          <Typography variant='caption'>Channel's name</Typography>
          <div>
            <Typography variant='caption'>Number of views</Typography>
            <Typography variant='caption'> Aired 2hours ago</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPreview;
