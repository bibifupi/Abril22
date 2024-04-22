import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InmuebleDetalleComponent } from '../inmueble-detalle/inmueble-detalle.component';

@Component({
  selector: 'app-inmuebles',
  standalone:true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.css'],
  
})
export class InmueblesComponent {
  inmuebles= [
    {
      id: 1,
      titulo: 'Casa reformada en La Moraleja',
      descripcion: 'Esta casa reformada en La Moraleja...',
      imagen: 'casa-moraleja.jpg',
    },
    {
      id: 2,
      titulo: 'Chalet pareado en Colmenar Viejo',
      descripcion: 'Este chalet pareado en Colmenar Viejo...',
      imagen: 'chalet-colmenar.jpg',
    },
  ];
}