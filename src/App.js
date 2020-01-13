// https://reacttraining.com/react-router/web/example/route-config

import React, { Suspense } from 'react';

import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import { routes } from './routes';
import { RouteWithSubRoutes } from './lib/index';

export default function RouteConfig() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>

          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>

      </Suspense>
    </Router>
  );
}
