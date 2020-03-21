import React from 'react';
import { } from '@material-ui/core';
import Nav from './Nav'
import BodyContent from './BodyContent';

function Main() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const drawerSwitchState = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div >
      <Nav drawerSwitchState={drawerSwitchState} />
      <BodyContent isDrawerOpen={isDrawerOpen} drawerSwitchState={drawerSwitchState} /> 
    </div>
  );
}

export default Main;
