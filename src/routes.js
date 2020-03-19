import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Nav from './Nav';
import BodyContent from './BodyContent'
const createRoutes = () => (
  <BrowserRouter>
    <Nav />
    <Route exact path='/' component={BodyContent} />
  </BrowserRouter>
);

export default createRoutes;