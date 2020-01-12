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
        <div>

          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>

          <footer>
            <p>
              This product uses the <a href="https://www.themoviedb.org/">TMDb</a> API but is not endorsed or certified by TMDb.
            </p>
          </footer>
        </div>
      </Suspense>
    </Router>
  );
}
