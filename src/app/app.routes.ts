import { GerenciamentoDeProdutos } from './pages/gerenciamento-de-produtos/gerenciamento-de-produtos';
import { Home } from './pages/home/home';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'gerenciamento',
        component: GerenciamentoDeProdutos
    }
];
