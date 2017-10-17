import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgFor } from '@angular/common';
import { Notes } from '../../class/notes';

@Component({
  selector: 'page-collection',
  templateUrl: 'page-collection.html'
})
export class CollectionPage {

  constructor(public navCtrl: NavController) {
    
  }

  notas = [
    new Notes('Senha do Cartão', 'Barara birirr Barara birirr asdnsuad dasdas asdasd'),
    new Notes('Comandos de SNES', 'Barara birirr Barara birirr asdnsuad dasdas asdasd meia lua direita esquerda e tal'),
    new Notes('Url de Comandos', 'zpto xypzasad asdasd dasdas asdasd meia lua direita esquerda e tal'),
    new Notes('Codigo fonte', 'asddse fdfexczxcw wdawdasd asxs cC asdawd w axc aa wdw awC a sw asdasd meia lua direita esquerda e tal'),
  ]
}
