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
  ocultarContenidoHamburger: boolean
  pixelesPantalla: any
  home: any
  crew: any
  technology: any
  destination: any
  boxVariable!: string
  constructor(private img: AppComponent, private router: Router) {
    this.pixelesPantalla = (this.img.PixelesPantalla())
    //esta condicion arregla el tamaño de el box shadow de los items de la navegacion
    if (this.pixelesPantalla >= 1281) {
      this.boxVariable = 'white 0px 2.132vw 0px -0.55vw'
    } else {
      if (this.pixelesPantalla < 1281) {
        this.boxVariable = 'white 0px 30.7px 0px -8px'
      }
    }
    this.ocultarContenidoHamburger = false
    this.HOME()
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
    //esta condicion arregla el tamaño de el box shadow de los items de la navegacion
    if (pixelesPantallaENMovimiento >= 1281) {
      this.boxVariable = 'white 0px 2.132vw 0px -0.55vw'
    } else {
      if (pixelesPantallaENMovimiento < 1281) {
        this.boxVariable = 'white 0px 30.7px 0px -8px'
      }
    }
  }
  HOME() {
    this.ocultarContenidoHamburger = false
    this.barrahome = this.boxVariable
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
    this.ocultarContenidoHamburger = false
    this.barrahome = 'none'
    this.barradestination = this.boxVariable
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
    this.ocultarContenidoHamburger = false
    this.barrahome = 'none'
    this.barradestination = 'none'
    this.barracrew = this.boxVariable
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
    this.ocultarContenidoHamburger = false
    this.barrahome = 'none'
    this.barradestination = 'none'
    this.barracrew = 'none'
    this.barratechnology = this.boxVariable
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
  MostrarContenido() {
    if (this.ocultarContenidoHamburger === false) {
      this.ocultarContenidoHamburger = true
    } else {
      this.ocultarContenidoHamburger = false
    }
  }

}
