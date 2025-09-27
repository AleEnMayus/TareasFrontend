import { Routes } from '@angular/router';

// Pages
import { Login } from './login/login';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Post } from './post/post';

// Services
import { authGuard } from './guards/authguard';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        // dashboard
        path: 'home',
        component: Home,
        canActivate: [authGuard]
    },
    {   
        // profile
        path: 'profile',
        component: Profile,
        canActivate: [authGuard]
    },
    
    { 
        path: 'post/:id', 
        component: Post,
        canActivate: [authGuard]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
