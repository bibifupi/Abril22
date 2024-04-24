import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InmuebleService } from '../_servicio/inmueble.service';
import { inmueble } from '../_modelo/inmueble';

@Component({
  selector: 'app-inmuebles',
  standalone:true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.css'],
  
})
export class InmueblesComponent {
  inmuebles:inmueble[]=[];
  
constructor(private inmuebleServicio: InmuebleService){}


ngOnInit():void {
  this.inmuebles=this.inmuebleServicio.obtenerTodos();
}

}