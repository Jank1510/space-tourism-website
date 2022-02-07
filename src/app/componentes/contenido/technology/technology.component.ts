import { Component, OnInit } from '@angular/core';
import data  from 'src/assets/json/data.json';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  colorUno: any
  colorUnotxt: any
  colorDos: any
  colorDostxt: any
  colorTres: any
  colorTrestxt: any
  dataJson: any = data
  name:any
  description:any
  img:any

  constructor() {

    this.colorUno = 'white'
    this.colorDos = '#fff0'
    this.colorTres = '#fff0'
    this.colorUnotxt='black'
    this.colorDostxt='white'
    this.colorTrestxt='white'
    this.name= this.dataJson.technology[0].name
    this.img = this.dataJson.technology[0].images.portrait
    this.description= this.dataJson.technology[0].description
  }

  ngOnInit(): void {
  }
  uno() {
    this.colorUno = 'white'
    this.colorDos = '#fff0'
    this.colorTres = '#fff0'
    this.colorUnotxt='black'
    this.colorDostxt='white'
    this.colorTrestxt='white'
    this.name= this.dataJson.technology[0].name
    this.description= this.dataJson.technology[0].description
    this.img = this.dataJson.technology[0].images.portrait

  }
  dos() {
    this.colorUno = '#fff0'
    this.colorDos = 'white'
    this.colorTres = '#fff0'
    this.colorUnotxt='white'
    this.colorDostxt='black'
    this.colorTrestxt='white'
    this.name= this.dataJson.technology[1].name
    this.description= this.dataJson.technology[1].description
    this.img = this.dataJson.technology[1].images.portrait

  }
  tres() {
    this.colorUno = '#fff0'
    this.colorDos = '#fff0'
    this.colorTres = 'white'
    this.colorUnotxt='white'
    this.colorDostxt='white'
    this.colorTrestxt='black'
    this.name= this.dataJson.technology[2].name
    this.description= this.dataJson.technology[2].description
    this.img = this.dataJson.technology[2].images.portrait

  }

}
