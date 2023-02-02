import { Component, OnInit } from '@angular/core';

import data from 'src/assets/json/data.json';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  nombreDestination: any
  descripcionDestination: any
  distanicaDestination: any
  viajeDestination: any
  dataJson: any = data
  imagenDestino: any
  bordeMoon: any
  bordeMars: any
  bordeEuropa: any
  bordeTitan: any

  constructor() {
    this.nombreDestination = this.dataJson.destinations[0].name
    this.descripcionDestination = this.dataJson.destinations[0].description
    this.distanicaDestination = this.dataJson.destinations[0].distance
    this.viajeDestination = this.dataJson.destinations[0].travel
    this.imagenDestino = this.dataJson.destinations[0].images.png
    this.bordeMoon = '0px 2px 0px 0px white'
    this.bordeEuropa = 'none'
    this.bordeMars = 'none'
    this.bordeTitan = 'none'
  }
  ngOnInit(): void {
  }
  displayAnimation: string = 'block'
  nameAnimation = ''
  moon(): void { 
    this.nameAnimation = 'openEfectReverse'
    setTimeout(() => {
      this.displayAnimation = 'none'
      setTimeout(() => {
        this.nameAnimation = 'openEfect'
        this.displayAnimation = 'block'
        this.nombreDestination = this.dataJson.destinations[0].name
        this.descripcionDestination = this.dataJson.destinations[0].description
        this.distanicaDestination = this.dataJson.destinations[0].distance
        this.viajeDestination = this.dataJson.destinations[0].travel
        this.imagenDestino = this.dataJson.destinations[0].images.png
        this.bordeMoon = '0px 2px 0px 0px white'
        this.bordeEuropa = 'none'
        this.bordeMars = 'none'
        this.bordeTitan = 'none'
      }, 1);
    }, 250);
  }
  mars(): void {
    this.nameAnimation = 'openEfectReverse'
    setTimeout(() => {
      this.displayAnimation = 'none'
      setTimeout(() => {
        this.nameAnimation = 'openEfect'
        this.displayAnimation = 'block'
        this.nombreDestination = this.dataJson.destinations[1].name
        this.descripcionDestination = this.dataJson.destinations[1].description
        this.distanicaDestination = this.dataJson.destinations[1].distance
        this.viajeDestination = this.dataJson.destinations[1].travel
        this.imagenDestino = this.dataJson.destinations[1].images.png
        this.bordeMoon = 'none'
        this.bordeEuropa = 'none'
        this.bordeMars = '0px 2px 0px 0px white'
        this.bordeTitan = 'none'
      }, 1);
    }, 250);
  }
  europa() {
    this.nameAnimation = 'openEfectReverse'
    setTimeout(() => {
      this.displayAnimation = 'none'
      setTimeout(() => {
        this.nameAnimation = 'openEfect'
        this.displayAnimation = 'block'
        this.nombreDestination = this.dataJson.destinations[2].name
        this.descripcionDestination = this.dataJson.destinations[2].description
        this.distanicaDestination = this.dataJson.destinations[2].distance
        this.viajeDestination = this.dataJson.destinations[2].travel
        this.imagenDestino = this.dataJson.destinations[2].images.png
        this.bordeMoon = 'none'
        this.bordeEuropa = '0px 2px 0px 0px white'
        this.bordeMars = 'none'
        this.bordeTitan = 'none'
      }, 1);
    }, 250);
  }
  titan() {
    this.nameAnimation = 'openEfectReverse'
    setTimeout(() => {
      this.displayAnimation = 'none'
      setTimeout(() => {
        this.nameAnimation = 'openEfect'
        this.displayAnimation = 'block'
        this.nombreDestination = this.dataJson.destinations[3].name
        this.descripcionDestination = this.dataJson.destinations[3].description
        this.distanicaDestination = this.dataJson.destinations[3].distance
        this.viajeDestination = this.dataJson.destinations[3].travel
        this.imagenDestino = this.dataJson.destinations[3].images.png
        this.bordeMoon = 'none'
        this.bordeEuropa = 'none'
        this.bordeMars = 'none'
        this.bordeTitan = '0px 2px 0px 0px white'
      }, 1);
    }, 250);
  }
}
