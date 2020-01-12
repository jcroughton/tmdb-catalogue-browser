import { lazy } from 'react';

export const routes = [
  {
    path: "/",
    component: lazy(() => import('./views/home/Home')),
    exact: true
  }
];
