import { Component, OnInit } from '@angular/core';
import data from 'src/assets/json/data.json';


@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  name: any
  role: any
  bio: any
  dataJson: any = data
  imgCrew: any
  selecPrimero: any
  selecSegundo: any
  selecTercero: any
  selecCuarto: any

  constructor() {
    this.role = this.dataJson.crew[0].role
    this.name = this.dataJson.crew[0].name
    this.bio = this.dataJson.crew[0].bio
    this.imgCrew = this.dataJson.crew[0].images.png
    this.selecPrimero = 'white'
    this.selecSegundo = 'gray'
    this.selecTercero = 'gray'
    this.selecCuarto = 'gray'
  }

  ngOnInit(): void {
  }
  displayAnimation = ''
  nameAnimation = ''
  primero() {
    this.nameAnimation = 'openEfectReverseCrew'
    setTimeout(() => {
      this.displayAnimation = 'none'
      setTimeout(() => {
        this.nameAnimation = 'openEfectCrew'
        this.displayAnimation = 'block'
        this.role = this.dataJson.crew[0].role
        this.name = this.dataJson.crew[0].name
        this.bio = this.dataJson.crew[0].bio
        this.imgCrew = this.dataJson.crew[0].images.png
        this.selecPrimero = 'white'
        this.selecSegundo = 'gray'
        this.selecTercero = 'gray'
        this.selecCuarto = 'gray'
      }, 1);
    }, 250);
  }
  segundo() {
    this.nameAnimation = 'openEfectReverseCrew'
    setTimeout(() => {
      this.displayAnimation = 'none'
      setTimeout(() => {
        this.nameAnimation = 'openEfectCrew'
        this.displayAnimation = 'block'
        this.role = this.dataJson.crew[1].role
        this.name = this.dataJson.crew[1].name
        this.bio = this.dataJson.crew[1].bio
        this.imgCrew = this.dataJson.crew[1].images.png
        this.selecPrimero = 'gray'
        this.selecSegundo = 'white'
        this.selecTercero = 'gray'
        this.selecCuarto = 'gray'
      }, 1);
    }, 250);
  }
  tercero() {
    this.nameAnimation = 'openEfectReverseCrew'
    setTimeout(() => {
      this.displayAnimation = 'none'
      setTimeout(() => {
        this.nameAnimation = 'openEfectCrew'
        this.displayAnimation = 'block'
        this.role = this.dataJson.crew[2].role
        this.name = this.dataJson.crew[2].name
        this.bio = this.dataJson.crew[2].bio
        this.imgCrew = this.dataJson.crew[2].images.png
        this.selecPrimero = 'gray'
        this.selecSegundo = 'gray'
        this.selecTercero = 'white'
        this.selecCuarto = 'gray'
      }, 1);
    }, 250);
  }
  cuarto() {
    this.nameAnimation = 'openEfectReverseCrew'
    setTimeout(() => {
      this.displayAnimation = 'none'
      setTimeout(() => {
        this.nameAnimation = 'openEfectCrew'
        this.displayAnimation = 'block'
        this.role = this.dataJson.crew[3].role
        this.name = this.dataJson.crew[3].name
        this.bio = this.dataJson.crew[3].bio
        this.imgCrew = this.dataJson.crew[3].images.png
        this.selecPrimero = 'gray'
        this.selecSegundo = 'gray'
        this.selecTercero = 'gray'
        this.selecCuarto = 'white'
      }, 1);
    }, 250);
  }
}
