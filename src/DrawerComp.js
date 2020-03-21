import React from 'react';
import { Drawer, ListItemText, List, ListItem, ClickAwayListener } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function DrawerComp({ isDrawerOpen, drawerSwitchState }) {


  return (
    <ClickAwayListener onClickAway={drawerSwitchState}>
      <Drawer variant="permanent">
        <List >
          <div style={{ textAlign: 'center' }}>
            <HomeIcon fontSize='large' style={{ padding: 5 }} />
            <ListItemText primaryTypographyProps={{variant : 'caption'}}>Home</ListItemText>
          </div>
          <div style={{ textAlign: 'center' }}>
            <WhatshotIcon fontSize='large' style={{ padding: 5 }} />
            <ListItemText primaryTypographyProps={{variant : 'caption'}}>Hot</ListItemText>
            </div>
            <div style={{ textAlign: 'center' }}>
              <SubscriptionsIcon fontSize='large' style={{ padding: 5 }} />
              <ListItemText primaryTypographyProps={{variant : 'caption'}}>Subscriptions</ListItemText>
            </div>
          <div style={{ textAlign: 'center' }}>
            <VideoLibraryIcon fontSize='large' style={{ padding: 5 }} />
            <ListItemText primaryTypographyProps={{variant : 'caption'}}>Library</ListItemText>
          </div>
        </List>
      </Drawer>
    </ClickAwayListener>
  );
}

export default DrawerComp;


