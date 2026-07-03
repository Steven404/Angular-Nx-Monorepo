import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
    path: 'product_details',
    loadChildren: () => import('product_details/Routes').then(m => m!.remoteRoutes)
    },
    {
    path: 'produc_list',
    loadChildren: () => import('produc_list/Routes').then(m => m!.remoteRoutes)
    },
    {
      path: '',
      component: NxWelcome
    },];
