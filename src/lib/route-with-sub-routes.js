// https://reacttraining.com/react-router/web/example/route-config
// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.

import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.location.pathname}
      render={ routeProps => (
        // pass the sub-routes down to keep nesting
        <route.component {...routeProps} routes={route.routes} />
      )}
    />
  );
};

export default RouteWithSubRoutes;
