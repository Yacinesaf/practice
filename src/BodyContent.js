import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Button, Typography, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerComp from './DrawerComp';


function Nav() {
  let [open, setOpen] = useState(false)
  const opens = () => {
    setOpen(!open)
  }
  return (
    <div style={{backgroundColor : '#ededed', height : 'calc(100vh - 64px)'}}>
    <Button onClick={opens}>sl</Button>
    <DrawerComp open={open} />
    </div>
  );
}

export default Nav;