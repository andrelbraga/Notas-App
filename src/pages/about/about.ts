import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgFor } from '@angular/common';
import { Notes } from '../../class/notes';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
    
  }

  notas = [
    new Notes(1, 'Senha do Cartão', 'Barara birirr Barara birirr asdnsuad dasdas asdasd', 5, 'Comentario'),
    new Notes(2, 'Comandos de SNES', 'Barara birirr Barara birirr asdnsuad dasdas asdasd meia lua direita esquerda e tal', 4, 'Comentario'),
    new Notes(3, 'Url de Comandos', 'zpto xypzasad asdasd dasdas asdasd meia lua direita esquerda e tal', 8, 'Comentario'),
    new Notes(4, 'Codigo fonte', 'asddse fdfexczxcw wdawdasd asxs cC asdawd w axc aa wdw awC a sw asdasd meia lua direita esquerda e tal', 1, 'Comentario'),
  ]
}
