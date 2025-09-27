import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (auth.isLoggedIn() && auth.getRole() === 'user') {
    return true; // Permite el acceso
  } else {
    alert('Acceso denegado. Se requiere ser iniciar sesión.');
    router.navigate(['/login']);
    return false; // Deniega el acceso
  }
};