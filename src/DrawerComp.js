import React from 'react';
import { Drawer, ListItemText, List, ListItem } from '@material-ui/core';


function DrawerComp({isDrawerOpen}) {


  return (
      <Drawer
        open={isDrawerOpen}
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


