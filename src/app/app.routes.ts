import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./component/home/home').then((c) => c.Home)
    },
    {
        path:'cadastro',
        loadComponent: () => import('./component/cadastro/cadastro').then((c) => c.Cadastro)
    }
];
