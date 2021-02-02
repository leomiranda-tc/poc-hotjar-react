import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hotjar } from 'react-hotjar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import OtherPage from './pages/OtherPage';

export default function Routes() {

  const hjid = 2227379;
  const hjsv = 6; 
  
  hotjar.initialize(hjid, hjsv);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/other-page" component={OtherPage} />
        <Route path="/" exact component={Home} />
        <Route default component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
