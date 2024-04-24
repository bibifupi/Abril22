import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InmuebleService } from '../_servicio/inmueble.service';
import { inmueble } from '../_modelo/inmueble';
@Component({
  selector: 'app-inmueble-detalle',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './inmueble-detalle.component.html',
  styleUrl: './inmueble-detalle.component.css'
})
export class InmuebleDetalleComponent implements OnInit {

  @Input()
  id: number = 0;
  constructor(private inmuebleServicio: InmuebleService) { }

  inmueble: any;
  ngOnInit(): void {

    this.inmueble = this.inmuebleServicio.obtenerUno(this.id);

  }
}

