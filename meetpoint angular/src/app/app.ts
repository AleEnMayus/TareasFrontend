import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { InactivityService } from './services/inactivity'; // Importa el servicio de inactividad

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Asegúrate de importar RouterOutlet
  template: `
    <router-outlet></router-outlet>
  `
})
export class App {
  protected readonly title = signal('wallet_ale');
  constructor(
    private inactivityService: InactivityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Suscribirse al evento de inactividad del servicio
    this.inactivityService.userInactive.subscribe(() => {
      // Mensaje de alerta o cualquier notificación al usuario
      alert('Tu sesión ha expirado debido a la inactividad.');
      

      // Redirigir al usuario a la página de login
      this.router.navigate(['/login']);
    });
  }
}
