import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

interface Resena {
  usuario: string;
  comentario: string;
  puntuacion: number;
  usuarioAvatar?: string;
}

interface Cafe {
  id: number;
  nombre: string;
  descripcion: string;
  ubicacion: string;
  imagen?: string;
  resenas: Resena[];
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule], // RouterModule para routerLink
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  cafes: Cafe[] = [];

  ngOnInit(): void {
    // Datos locales (mock). Puedes ajustarlos como en cafe-detail.
    this.cafes = [
      {
        id: 1,
        nombre: 'Café Central',
        descripcion: 'Un clásico del centro con ambiente acogedor y el mejor espresso artesanal.',
        ubicacion: 'Av. Principal 123, Asunción',
        imagen: 'assets/posts/cafeteria1.jpg',
        resenas: [
          { usuario: 'María López', comentario: 'Excelente atención y el cappuccino delicioso ☕', puntuacion: 5, usuarioAvatar: 'https://i.pravatar.cc/150?img=5' },
          { usuario: 'Carlos Pérez', comentario: 'Buen ambiente, aunque el lugar es pequeño.', puntuacion: 4, usuarioAvatar: 'https://i.pravatar.cc/150?img=3' }
        ]
      },
      {
        id: 2,
        nombre: 'La Tostadora',
        descripcion: 'Café moderno con opciones veganas y gran variedad de granos.',
        ubicacion: 'Calle del Sol 456, Encarnación',
        imagen: 'assets/posts/cafeteria2.jpg',
        resenas: [
          { usuario: 'Ana García', comentario: 'Los postres son increíbles, especialmente el brownie.', puntuacion: 5, usuarioAvatar: 'https://i.pravatar.cc/150?img=8' }
        ]
      },
      {
        id: 3,
        nombre: 'Express Café',
        descripcion: 'Rápido y efectivo para un café para llevar.',
        ubicacion: 'Estación Central',
        imagen: 'assets/posts/cafeteria3.jpg',
        resenas: []
      },
      {
        id: 4,
        nombre: 'Café Colonial',
        descripcion: 'Ambiente colonial, ideal para tardes largas de lectura.',
        ubicacion: 'Barrio Sur',
        imagen: 'assets/posts/cafeteria4.jpg',
        resenas: [
          { usuario: 'Martina', comentario: 'Muy recomendado para relajarse.', puntuacion: 5, usuarioAvatar: 'https://i.pravatar.cc/150?img=12' }
        ]
      }
    ];
  }
}
