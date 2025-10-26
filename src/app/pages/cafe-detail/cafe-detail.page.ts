import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

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
  selector: 'app-cafe-detail',
  standalone: true, // ✅ Importante en Angular/Ionic moderno
  imports: [CommonModule, IonicModule], // ✅ Corrige todos los errores de directivas y componentes Ionic
  templateUrl: './cafe-detail.page.html',
  styleUrls: ['./cafe-detail.page.scss'],
})
export class CafeDetailPage implements OnInit {
  cafe?: Cafe;

  cafes: Cafe[] = [
    {
      id: 1,
      nombre: 'Café Central',
      descripcion:
        'Un clásico del centro con ambiente acogedor y el mejor espresso artesanal.',
      ubicacion: 'Av. Principal 123, Asunción',
      imagen:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
      resenas: [
        {
          usuario: 'María López',
          comentario: 'Excelente atención y el cappuccino delicioso ☕',
          puntuacion: 5,
          usuarioAvatar: 'https://i.pravatar.cc/150?img=5',
        },
        {
          usuario: 'Carlos Pérez',
          comentario: 'Buen ambiente, aunque el lugar es pequeño.',
          puntuacion: 4,
          usuarioAvatar: 'https://i.pravatar.cc/150?img=3',
        },
      ],
    },
    {
      id: 2,
      nombre: 'La Tostadora',
      descripcion:
        'Café moderno con opciones veganas y gran variedad de granos.',
      ubicacion: 'Calle del Sol 456, Encarnación',
      imagen:
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
      resenas: [
        {
          usuario: 'Ana García',
          comentario: 'Los postres son increíbles, especialmente el brownie.',
          puntuacion: 5,
          usuarioAvatar: 'https://i.pravatar.cc/150?img=8',
        },
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cafe = this.cafes.find((c) => c.id === +id);
    }
  }
}
