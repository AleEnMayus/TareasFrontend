import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { authGuard } from './guards/authguard';
import { Calculator } from './calculator/calculator';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'home',
        component: Home,
        canActivate: [authGuard] // Protege la ruta 'home'
    },
    {
        path: 'calculator',
        component: Calculator,
        canActivate: [authGuard] // Protege la ruta 'home'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
