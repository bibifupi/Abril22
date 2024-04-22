import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
articulos=[
  
    {
      id: 1,
      titulo: 'Hacking ético',
      descripcion: 'El hacking ético...',
      imagen: 'hacking-etico.png',
    },
    {
      id: 2,
      titulo: 'Legislación de seguridad en Europa',
      descripcion: 'La legislación de seguridad en Europa...',
      imagen: 'Legislacion-europa.png',
    },
    {
      id: 3,
      titulo: '¿Cómo evitar que te hackeen la cuenta?',
      descripcion: 'Para evitar que te hackeen la cuenta...',
      imagen: 'evitar-hackeo.png',
    },
    {
      id: 4,
      titulo: '¿Qué es phising?',
      descripcion: 'El phising es...',
      imagen: 'phising.png',
    }
  
]
}

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