
import { Component, OnInit } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [Navbar, CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  name: string = '';
  email: string = '';
  bio: string = '';


   
  ngOnInit() {
    const userData = localStorage.getItem('user');
    
    if (userData) {
      const user = JSON.parse(userData);
      this.name = user.name || '';
      this.bio = user.bio || '';
      this.email = `${user.name?.replace(/\s+/g, '.')}@example.com`;
    }
  }
  updateBio() {
    // Cargar los datos del usuario existentes
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      
      // Actualizar la biografía
      user.bio = this.bio;

      // Guardar los datos actualizados en el localStorage
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
}