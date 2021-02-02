import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import OtherPage from './pages/OtherPage';

export default function Routes() {
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
