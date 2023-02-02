import { Component } from '@angular/core'; 
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'space-tourism-website';

  ngOnInit(): void {
    AOS.init()

    window.addEventListener('load',AOS.refresh)
  }
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
