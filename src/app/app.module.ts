import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { HomeComponent } from './componentes/contenido/home/home.component';
import { DestinationComponent } from './componentes/contenido/destination/destination.component';
import { CrewComponent } from './componentes/contenido/crew/crew.component';
import { TechnologyComponent } from './componentes/contenido/technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
