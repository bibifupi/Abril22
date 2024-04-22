import { RouterModule, Routes } from '@angular/router';
import { InmueblesComponent } from './inmuebles/inmuebles.component';
import { InmuebleDetalleComponent } from './inmueble-detalle/inmueble-detalle.component';
import { BlogComponent } from './blog/blog.component';
import { ArticulosComponent } from './articulos/articulos.component';

export const routes: Routes = [
  { path: 'inmuebles', component: InmueblesComponent },
  { path: 'inmueble-detalle/:id', component: InmuebleDetalleComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'articulos/:id', component: ArticulosComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];
