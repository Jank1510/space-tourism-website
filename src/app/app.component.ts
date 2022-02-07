import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'space-tourism-website';

  imgFondo: any

  constructor() { }

  cambiarfondo(urlIMG: any) {
    this.imgFondo = urlIMG
  }
  PixelesPantalla() {
    var pantalla = document.getElementById("pantalla")
    var pxpantalla = (pantalla?.clientWidth)
    
    return pxpantalla
  }
  

}
