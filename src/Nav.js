import React from 'react';
import { AppBar, IconButton, Toolbar, Button, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerComp from './DrawerComp';


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
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
