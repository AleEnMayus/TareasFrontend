import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InactivityService {
  private inactivityTimer: any;
  private readonly INACTIVITY_TIME = 5 * 60 * 1000; // 5 minutos en milisegundos
  public userInactive = new Subject<boolean>();

  constructor(private ngZone: NgZone, private router: Router) {
    this.startWatching();
  }

  // Se inicia el temporizador y se escuchan los eventos del DOM
  startWatching() {
    this.ngZone.runOutsideAngular(() => {
      document.addEventListener('mousemove', () => this.resetTimer());
      document.addEventListener('keydown', () => this.resetTimer());
      document.addEventListener('click', () => this.resetTimer());
    });
    this.resetTimer();
  }

  // Se reinicia el temporizador
  resetTimer() {
    clearTimeout(this.inactivityTimer);
    this.inactivityTimer = setTimeout(() => {
      this.handleInactivity();
    }, this.INACTIVITY_TIME);
  }

  // Se maneja la inactividad
  private handleInactivity() {
    // Limpiar el almacenamiento local
    localStorage.clear();
    sessionStorage.clear(); // opcional, si usas sessionStorage también

    // Emitir el evento de inactividad
    this.userInactive.next(true);

    // Redirigir al login (opcional)
    this.ngZone.run(() => {
      alert('Se ha cerrado la sesión por inactividad');
      this.router.navigate(['/login']);
    });
  }

  // Se detiene el temporizador, útil para el logout manual
  stopWatching() {
    clearTimeout(this.inactivityTimer);
  }
}