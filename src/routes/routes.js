import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}
