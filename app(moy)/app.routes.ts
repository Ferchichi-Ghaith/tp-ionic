import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./Pages/moy/moy.page').then((m) => m.MoyPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'moy',
    loadComponent: () => import('./Pages/moy/moy.page').then( m => m.MoyPage)
  },
];
