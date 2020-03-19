import React from 'react';
import { AppBar, IconButton, Toolbar, Button, Typography, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


function DrawerComp({open}) {


  console.log(open)
  return (
      <Drawer
        open={open}
        variant="permanent"
      >
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
}

export default DrawerComp;


