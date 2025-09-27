import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private isAuthenticated = false;
  private userRole: 'user' | null = null;
  private readonly ROLE_KEY = 'user_role';

  constructor(private router: Router) {
    this.loadAuthState();
  }

  // Carga el estado de autenticación al iniciar el servicio
  private loadAuthState() {
    const storedRole = localStorage.getItem(this.ROLE_KEY);
    if (storedRole === 'user') {
      this.isAuthenticated = true;
      this.userRole = 'user';
    }
  }

  login(role: 'user') {
    this.isAuthenticated = true;
    this.userRole = role;
    // Guarda el rol en el localStorage
    localStorage.setItem(this.ROLE_KEY, role);
    this.router.navigate(['/home']);
  }

  logout() {
    this.isAuthenticated = false;
    this.userRole = null;
    // Elimina el rol del localStorage al cerrar la sesión
    localStorage.removeItem(this.ROLE_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getRole(): 'user' | null {
    // Si el rol en memoria es nulo, lo intenta obtener del localStorage
    if (!this.userRole) {
      const storedRole = localStorage.getItem(this.ROLE_KEY);
      if (storedRole === 'user') {
        this.userRole = 'user';
        this.isAuthenticated = true;
      }
    }
    return this.userRole;
  }
}