import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { InmueblesComponent } from './inmuebles/inmuebles.component';
import { InmuebleDetalleComponent } from './inmueble-detalle/inmueble-detalle.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InmueblesComponent, RouterModule, InmuebleDetalleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril22';
}
