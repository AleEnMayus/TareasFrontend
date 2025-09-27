import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-home',
  imports: [Navbar, CommonModule],  // Añade CommonModule al array de imports
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  posts = [
    { id: 1, title: 'Publicación 1', summary: 'Resumen de la publicación 1' },
    { id: 2, title: 'Publicación 2', summary: 'Resumen de la publicación 2' },
    { id: 3, title: 'Publicación 3', summary: 'Resumen de la publicación 3' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewDetails(postId: number) {
    this.router.navigate(['/post', postId]);
  }
}