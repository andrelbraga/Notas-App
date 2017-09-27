import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { HomePage } from '../home/home';


@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {
  
  constructor(public navCtrl: NavController, private sqlite: SQLite) {
    this.opendb();
   }  

  
   opendb(){
   console.log('open db!!');
   }

  note = {
    id:'',
    title: '',
    content: '',
  }

  addNotes(n){
      console.log(n);
  }

  backHome(){
    this.navCtrl.pop();
  }

}


