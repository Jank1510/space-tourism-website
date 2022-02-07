import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { HomeComponent } from './componentes/contenido/home/home.component';
import { TechnologyComponent } from './componentes/contenido/technology/technology.component';
import { CrewComponent } from './componentes/contenido/crew/crew.component';
import { DestinationComponent } from './componentes/contenido/destination/destination.component';

const routes: Routes = [
  
  { path: 'Navegacion', component: NavegacionComponent },
  { path: 'HOME', component: HomeComponent },
  { path: 'TECHNOLOGY', component: TechnologyComponent},
  { path: 'CREW', component:CrewComponent},
  { path: 'DESTINATION', component:DestinationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
