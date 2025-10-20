import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';  // Importar IonicModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafe-detail',
  standalone: true,
  imports: [CommonModule, IonicModule],  // Aquí importamos los módulos que usamos
  templateUrl: './cafe-detail.page.html',
  styleUrls: ['./cafe-detail.page.scss']
})
export class CafeDetailPage implements OnInit {
  nombre: string | null = null;  // El parámetro 'nombre' de la URL
  cafe: any; // El objeto de la cafetería con sus reseñas
  safeMapUrl: SafeResourceUrl | undefined;  // Para el mapa de Google


cafeterias = [
    {
      nombre: 'Café Central',
      ubicacion: 'Centro',
      horario: '8:00 - 20:00',
      reseñas: [
        { persona: 'Laura', comentario: 'Excelente café y atención. ☕⭐⭐⭐⭐⭐' },
        { persona: 'Martín', comentario: 'Me encantó el ambiente. 🏙️' },
        { persona: 'Carlos', comentario: 'Muy buen café, pero el servicio es un poco lento. ⏳⭐⭐⭐' },
        { persona: 'Ana', comentario: 'Un lugar muy acogedor, ideal para estudiar. 📚' },
        { persona: 'Sofía', comentario: 'Perfecto para una tarde con amigos. ☕🍰⭐⭐⭐⭐' },
      ],
    },
    {
      nombre: 'La Taza Feliz',
      ubicacion: 'Norte',
      horario: '9:00 - 22:00',
      reseñas: [
        { persona: 'Juan', comentario: 'Un lugar cálido, con el mejor café de la ciudad. ☕⭐⭐⭐⭐⭐' },
        { persona: 'Elena', comentario: 'Me encanta el lugar, siempre muy tranquilo. 🧘‍♀️' },
        { persona: 'Pedro', comentario: 'Excelente para un desayuno rápido. 🍞🥐' },
        { persona: 'María', comentario: 'Muy recomendable, el café es delicioso. 🍪' },
        { persona: 'Rosa', comentario: 'Perfecto para una reunión de trabajo. 💻' },
      ],
    },
    {
      nombre: 'Express Café',
      ubicacion: 'Estación',
      horario: '6:00 - 18:00',
      reseñas: [
        { persona: 'Lucía', comentario: 'El café está muy bueno y el servicio rápido. 🚆⭐⭐⭐⭐⭐' },
        { persona: 'Federico', comentario: 'Buen lugar para un café express antes de tomar el tren. 🚉' },
        { persona: 'Ricardo', comentario: 'Excelente para llevar, pero el espacio es pequeño. 🏃‍♂️' },
        { persona: 'Sandra', comentario: 'Ideal para un café rápido, muy práctico. 🕒' },
        { persona: 'Gabriela', comentario: 'El mejor café para empezar el día. ☀️' },
      ],
    },
    {
      nombre: 'Café Colonial',
      ubicacion: 'Sur',
      horario: '10:00 - 23:00',
      reseñas: [
        { persona: 'Martina', comentario: 'Ambiente muy agradable y excelente café. 🏛️⭐⭐⭐⭐⭐' },
        { persona: 'Miguel', comentario: 'Gran variedad de bebidas, ideal para todas las horas. 🍹' },
        { persona: 'Claudia', comentario: 'Muy bien decorado, me gusta mucho venir aquí. 🪴' },
        { persona: 'David', comentario: 'Una experiencia única, el mejor lugar para relajarse. 🧘‍♂️' },
        { persona: 'Valeria', comentario: 'Me encanta el lugar, ideal para un café nocturno. 🌙' },
      ],
    },
    {
      nombre: 'Aroma Café',
      ubicacion: 'Centro',
      horario: '7:30 - 21:00',
      reseñas: [
        { persona: 'Ricardo', comentario: 'Muy buen café y el lugar es súper cómodo. 🛋️⭐⭐⭐⭐⭐' },
        { persona: 'Adriana', comentario: 'Me encanta el ambiente, perfecto para una cita. 💑' },
        { persona: 'Beatriz', comentario: 'El café es muy bueno, pero los precios son algo altos. 💸⭐⭐⭐' },
        { persona: 'José', comentario: 'Excelente lugar para descansar y disfrutar de un buen café. 🏞️' },
        { persona: 'Isabel', comentario: 'Uno de los mejores cafés que he probado. ☕' },
      ],
    },
  ];

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // Obtener el parámetro 'nombre' de la URL
    this.nombre = this.route.snapshot.paramMap.get('nombre');
    
    // Verificar si el parámetro 'nombre' existe en la URL
    if (!this.nombre) {
      console.error('El parámetro "nombre" no se encuentra en la URL.');
      return;  // Detener la ejecución si no hay nombre
    }

    // Buscar la cafetería correspondiente al nombre
    this.cafe = this.cafeterias.find(c => c.nombre === this.nombre);

    // Verificar si la cafetería existe
    if (!this.cafe) {
      console.error('Cafetería no encontrada');
      return;  // Detener la ejecución si no se encuentra la cafetería
    }

    // Verificar si el array de reseñas existe y contiene datos
    if (!this.cafe.reseñas || this.cafe.reseñas.length === 0) {
      console.warn('No hay reseñas para esta cafetería.');
    }

    // Crear el enlace seguro para el mapa
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(this.cafe.ubicacion)}&output=embed`;
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(mapUrl);
  }
}


