import { lazy } from 'react';

export const routes = [
  {
    path: "/",
    component: lazy(() => import('./views/home/Home')),
    exact: true
  },
  {
    path: "/media-detail/:mediaId",
    component: lazy(() => import('./views/media/MediaDetail')),
    exact: true
  }
];
