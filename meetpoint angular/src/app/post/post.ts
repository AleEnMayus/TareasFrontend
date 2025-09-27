import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-post',
  imports: [Navbar, CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post implements OnInit {
  postId: number | null = null;
  post: any;

  // Datos de ejemplo (en un futuro vendrán de un servicio/API)
  posts = [
    { id: 1, title: 'Publicación 1', summary: 'Resumen de la publicación 1', content: 'Contenido completo de la publicación 1.' },
    { id: 2, title: 'Publicación 2', summary: 'Resumen de la publicación 2', content: 'Contenido completo de la publicación 2.' },
    { id: 3, title: 'Publicación 3', summary: 'Resumen de la publicación 3', content: 'Contenido completo de la publicación 3.' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // obtener el id de la ruta
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.posts.find(p => p.id === this.postId) || null;
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
