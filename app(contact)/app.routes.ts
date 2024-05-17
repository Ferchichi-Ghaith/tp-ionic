import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./Pages/contact-home/contact-home.page').then((m) => m.ContactHomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'edit-contact',
    loadComponent: () => import('./Pages/edit-contact/edit-contact.page').then( m => m.EditContactPage)
  },
  {
    path: 'add-contact',
    loadComponent: () => import('./Pages/add-contact/add-contact.page').then( m => m.AddContactPage)
  },

];
