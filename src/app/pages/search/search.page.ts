import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  busqueda: string = '';

  cafeterias = [
    { nombre: 'Café Central', ubicacion: 'Centro', horario: '8:00 - 20:00' },
    { nombre: 'La Taza Feliz', ubicacion: 'Norte', horario: '9:00 - 22:00' },
    { nombre: 'Express Café', ubicacion: 'Estación', horario: '6:00 - 18:00' },
    { nombre: 'Café Colonial', ubicacion: 'Sur', horario: '10:00 - 23:00' },
    { nombre: 'Aroma Café', ubicacion: 'Centro', horario: '7:30 - 21:00' },
  ];

  resultados = [...this.cafeterias];

  filtrarCafeterias() {
    const termino = this.busqueda.toLowerCase();

    this.resultados = this.cafeterias.filter((cafe) =>
      cafe.nombre.toLowerCase().includes(termino) ||
      cafe.ubicacion.toLowerCase().includes(termino)
    );
  }
}
