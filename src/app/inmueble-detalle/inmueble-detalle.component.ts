import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inmueble-detalle',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './inmueble-detalle.component.html',
  styleUrl: './inmueble-detalle.component.css'
})
export class InmuebleDetalleComponent implements OnInit{
  ngOnInit(): void {
    console.log('id:'+this.id);
  }
  
  @Input()
  id:number=0;
      inmuebles = [
        {
          id: 1,
          titulo: 'Casa reformada en La Moraleja',
          descripcion: 'Esta casa reformada en La Moraleja combina un cautivador estilo moderno con una arquitectura impresionante. Algunas de sus características notables son:Diseño contemporáneo: La propiedad ha sido renovada con un enfoque en la elegancia y la funcionalidad.Ascensor y bodega: Ofrece comodidades como un ascensor para mayor conveniencia y una elegante zona de bodega. Espacios interiores y exteriores: El interior es ideal para el entretenimiento, mientras que la espectacular zona de barbacoa complementa los espacios al aire libre.',
          imagen: "../assets/imagenes/casa-moraleja.jpg"
        },
        {
          id: 2,
          titulo: 'Chalet pareado en Colmenar Viejo',
          descripcion: 'Este chalet pareado en Colmenar Viejo combina un cautivador estilo moderno con una arquitectura impresionante. Algunas de sus características notables son:Diseño contemporáneo: La propiedad ha sido renovada con un enfoque en la elegancia y la funcionalidad.Ascensor y bodega: Ofrece comodidades como un ascensor para mayor conveniencia y una elegante zona de bodega. Espacios interiores y exteriores: El interior es ideal para el entretenimiento, mientras que la espectacular zona de barbacoa complementa los espacios al aire libre. Eficiencia energética: Compartir una pared con la casa vecina ayuda a reducir la pérdida de calor o frío, lo que se traduce en un menor consumo de energía.',
          imagen: "../assets/imagenes/chalet-colmenar.jpg"
        }
      ];
    }
  
