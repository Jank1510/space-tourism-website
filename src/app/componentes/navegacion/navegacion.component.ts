import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  barrahome: any
  barradestination: any
  barracrew: any
  barratechnology: any
  ocultarNav!: boolean
  ocultarNavHamburger!: boolean
  ocultarContenidoHamburger:boolean
  pixelesPantalla: any
  home: any
  crew: any
  technology: any
  destination: any

  constructor(private img: AppComponent, private router: Router) {

    this.ocultarContenidoHamburger=false
    this.HOME()
    this.pixelesPantalla = (this.img.PixelesPantalla())
    if (this.pixelesPantalla < (768)) {
      img.cambiarfondo('url(./assets/home/background-home-mobile.jpg')
      this.ocultarNav = false
      this.ocultarNavHamburger = true
    } else {
      if (this.pixelesPantalla < (1281)) {
        img.cambiarfondo('url(./assets/home/background-home-tablet.jpg')
        this.ocultarNav = true
        this.ocultarNavHamburger = false
      } else {
        if (this.pixelesPantalla > (1281)) {
          img.cambiarfondo('url(./assets/home/background-home-desktop.jpg')
          this.ocultarNav = true
          this.ocultarNavHamburger = false
        }
      }
    }
  }

  ngOnInit(): void {
  }
  onResize(event: any) {
    var pixelesPantallaENMovimiento = (event.target.innerWidth);
    if (this.home === true) {
      if (pixelesPantallaENMovimiento < 768) {
        this.img.cambiarfondo('url(./assets/home/background-home-mobile.jpg')
        this.ocultarNav = false
        this.ocultarNavHamburger = true
      } else {
        if (pixelesPantallaENMovimiento < 1281) {
          this.img.cambiarfondo('url(./assets/home/background-home-tablet.jpg')
          this.ocultarNav = true
          this.ocultarNavHamburger = false
        } else {
          if (pixelesPantallaENMovimiento > 1281) {
            this.img.cambiarfondo('url(./assets/home/background-home-desktop.jpg')
            this.ocultarNav = true
            this.ocultarNavHamburger = false
          }
        }
      }
    } else {
      if (this.destination === true) {
        if (pixelesPantallaENMovimiento < 768) {
          this.img.cambiarfondo('url(./assets/destination/background-destination-mobile.jpg')
          this.ocultarNav = false
          this.ocultarNavHamburger = true

        } else {
          if (pixelesPantallaENMovimiento < 1281) {
            this.img.cambiarfondo('url(./assets/destination/background-destination-tablet.jpg')
            this.ocultarNav = true
            this.ocultarNavHamburger = false


          } else {
            if (pixelesPantallaENMovimiento > 1281) {
              this.img.cambiarfondo('url(./assets/destination/background-destination-desktop.jpg')
              this.ocultarNav = true
              this.ocultarNavHamburger = false

            }
          }
        }
      } else {
        if (this.crew === true) {
          if (pixelesPantallaENMovimiento < 768) {
            this.img.cambiarfondo('url(./assets/crew/background-crew-mobile.jpg')
            this.ocultarNav = false
            this.ocultarNavHamburger = true
          } else {
            if (pixelesPantallaENMovimiento < 1281) {
              this.img.cambiarfondo('url(./assets/crew/background-crew-tablet.jpg')
              this.ocultarNav = true
              this.ocultarNavHamburger = false
            } else {
              if (pixelesPantallaENMovimiento > 1281) {
                this.img.cambiarfondo('url(./assets/crew/background-crew-desktop.jpg')
                this.ocultarNav = true
                this.ocultarNavHamburger = false
              }
            }
          }
        } else {
          if (this.technology === true) {
            if (pixelesPantallaENMovimiento < 768) {
              this.img.cambiarfondo('url(./assets/technology/background-technology-mobile.jpg')
              this.ocultarNav = false
              this.ocultarNavHamburger = true
            } else {
              if (pixelesPantallaENMovimiento < 1281) {
                this.img.cambiarfondo('url(./assets/technology/background-technology-tablet.jpg')
                this.ocultarNav = true
                this.ocultarNavHamburger = false
              } else {
                if (pixelesPantallaENMovimiento > 1281) {
                  this.img.cambiarfondo('url(./assets/technology/background-technology-desktop.jpg')
                  this.ocultarNav = true
                  this.ocultarNavHamburger = false
                }
              }
            }
          }
        }
      }
    }
  }
  HOME() {
    this.ocultarContenidoHamburger=false
    this.barrahome = 'white 0px 30px 0px -8px'
    this.barradestination = 'none'
    this.barracrew = 'none'
    this.barratechnology = 'none'
    this.router.navigate(['HOME'])
    this.home = true
    this.destination = false
    this.crew = false
    this.technology = false
    this.pixelesPantalla = (this.img.PixelesPantalla())
    if (this.pixelesPantalla < (768)) {
      this.img.cambiarfondo('url(./assets/home/background-home-mobile.jpg')
    } else {
      if (this.pixelesPantalla < (1281)) {
        this.img.cambiarfondo('url(./assets/home/background-home-tablet.jpg')
      } else {
        if (this.pixelesPantalla > (1281)) {
          this.img.cambiarfondo('url(./assets/home/background-home-desktop.jpg')
        }
      }
    }
  }
  DESTINATION() {
    this.ocultarContenidoHamburger=false
    this.barrahome = 'none'
    this.barradestination = 'white 0px 30px 0px -8px'
    this.barracrew = 'none'
    this.barratechnology = 'none'
    this.router.navigate(['DESTINATION'])
    this.home = false
    this.destination = true
    this.crew = false
    this.technology = false
    this.pixelesPantalla = (this.img.PixelesPantalla())
    if (this.pixelesPantalla < (768)) {
      this.img.cambiarfondo('url(./assets/destination/background-destination-mobile.jpg')
    } else {
      if (this.pixelesPantalla < (1281)) {
        this.img.cambiarfondo('url(./assets/destination/background-destination-tablet.jpg')
      } else {
        if (this.pixelesPantalla > (1281)) {
          this.img.cambiarfondo('url(./assets/destination/background-destination-desktop.jpg')
        }
      }
    }
  }
  CREW() {
    this.ocultarContenidoHamburger=false
    this.barrahome = 'none'
    this.barradestination = 'none'
    this.barracrew = 'white 0px 30px 0px -8px'
    this.barratechnology = 'none'
    this.router.navigate(['CREW'])
    this.home = false
    this.destination = false
    this.crew = true
    this.technology = false
    this.pixelesPantalla = (this.img.PixelesPantalla())
    if (this.pixelesPantalla < (768)) {
      this.img.cambiarfondo('url(./assets/crew/background-crew-mobile.jpg')
    } else {
      if (this.pixelesPantalla < (1281)) {
        this.img.cambiarfondo('url(./assets/crew/background-crew-tablet.jpg')
      } else {
        if (this.pixelesPantalla > (1281)) {
          this.img.cambiarfondo('url(./assets/crew/background-crew-desktop.jpg')
        }
      }
    }
  }
  TECHNOLOGY() {
    this.ocultarContenidoHamburger=false
    this.barrahome = 'none'
    this.barradestination = 'none'
    this.barracrew = 'none'
    this.barratechnology = 'white 0px 30px 0px -8px'
    this.router.navigate(['TECHNOLOGY'])
    this.home = false
    this.destination = false
    this.crew = false
    this.technology = true
    this.pixelesPantalla = (this.img.PixelesPantalla())
    if (this.pixelesPantalla < (768)) {
      this.img.cambiarfondo('url(./assets/technology/background-technology-mobile.jpg')
    } else {
      if (this.pixelesPantalla < (1281)) {
        this.img.cambiarfondo('url(./assets/technology/background-technology-tablet.jpg')
      } else {
        if (this.pixelesPantalla > (1281)) {
          this.img.cambiarfondo('url(./assets/technology/background-technology-desktop.jpg')
        }
      }
    }
  }
  MostrarContenido(){
    if (this.ocultarContenidoHamburger===false) {      
    this.ocultarContenidoHamburger=true
    }else{
    this.ocultarContenidoHamburger=false
    }
  }

}
