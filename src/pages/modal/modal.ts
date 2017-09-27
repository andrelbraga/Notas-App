import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';


@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

  constructor(public navCtrl: NavController) {

  }

  note = {
    id:'',
    title: '',
    content: '',
  }

  addNotes(n){
      console.log(n);
  }

}
