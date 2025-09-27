import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InactivityService } from '../services/inactivity';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string = '';
  password: string = '';
  errorMsg: string = '';
  showErrorDiv: boolean = false;

  constructor(private router: Router, private inactivityService: InactivityService, private auth: Auth) {}

  login() {
    const password = this.password;
    let mensajeError = ""; 

    if (password.length < 8) {
      mensajeError += ("La contraseña no puede tener menos de 8 caracteres.");
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    if (!hasUppercase || !hasLowercase || !hasDigit) {
      mensajeError +=("La contraseña debe contener al menos una mayúscula, una minúscula y un número.");
    }

    const specialCharacters = (password.match(/[^a-zA-Z0-9]/g) || []).length;
    if (specialCharacters < 1 || specialCharacters > 8) {
      mensajeError +=("La contraseña debe tener entre 1 y 8 caracteres especiales.");
    }

    for (let i = 0; i <= password.length - 3; i++) {
      const subcadena = password.substring(i, i + 3);

      // Check if the substring is exactly three digits
      if (/^\d{3}$/.test(subcadena)) {
        const numeros = subcadena.split('').map(Number);
        
        // Corrected logic: Check if the three numbers are consecutive
        // Ex: 1, 2, 3 or 9, 8, 7
        if (Math.abs(numeros[0] - numeros[1]) === 1 && Math.abs(numeros[1] - numeros[2]) === 1) {
          mensajeError +=("La contraseña no puede tener tres números consecutivos.");
          break; 
        }
      }
    }

    if (mensajeError.length > 0) {
      this.errorMsg = mensajeError;
      this.showErrorDiv = true;
    } else {
      this.inactivityService.startWatching(); 
      this.showErrorDiv = false;
      alert("Login successful!");
      this.auth.login('user');
    }
  }
}