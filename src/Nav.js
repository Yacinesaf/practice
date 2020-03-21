import React from 'react';
import { AppBar, IconButton, Toolbar, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import imgProfile from './Sans titre-2.png'
import './styles.css'


function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const drawerSwitchState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      <AppBar position="static" color='inherit' elevation={0} >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={drawerSwitchState}>
            <MenuIcon />
          </IconButton>
          <YouTubeIcon fontSize='large' style={{ color: 'red', paddingRight: 2 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', flexGrow : 1, alignItems : 'center' }}>
            <h3 style={{ margin: 0 }}>
              YouTube
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', height: 30, border: '0.5px solid grey', width : 500}}>
              <input type='text' className='input' style={{ fontSize: 18, paddingLeft: 15, flexGrow : 1 }} placeholder='Search' />
              <div style={{ border: '0.5px solid grey', backgroundColor: '#ededed', height: '100%', width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SearchIcon />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VideoCallIcon style={{ color: 'grey', fontSize : 28 }} />
              <ViewModuleIcon style={{ padding: '0px 15px', color: 'grey', fontSize : 28 }} />
              <NotificationsIcon style={{ color: 'grey', paddingRight : 15, fontSize : 28 }} />
              <Avatar alt='your account' src={imgProfile} /> 
            </div>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
