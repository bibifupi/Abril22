import { Injectable } from '@angular/core';
import {inmueble} from '../_modelo/inmueble';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
inmuebles:inmueble[]=[
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
]
  constructor() {}
  obtenerTodos():inmueble[]{

    return this.inmuebles;
  }
  obtenerUno(id: number): inmueble {
    const inmueble = this.inmuebles.find((e) => e.id == id);
    if (inmueble) {
      return inmueble;
    } else {
      throw new Error(`Inmueble con id ${id} no encontrado`);
    }
  }

}
