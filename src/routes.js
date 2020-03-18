import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Nav from './Nav';
const createRoutes = () => (
  <BrowserRouter>
    <Nav />
  </BrowserRouter>
);

export default createRoutes;