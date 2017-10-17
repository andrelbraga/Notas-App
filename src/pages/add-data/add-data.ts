import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

import { HomePage } from '../page-home/page-home';
import { Notes } from '../../class/notes';


@Component({
  selector: 'add-data',
  templateUrl: 'add-data.html'
})
export class AddData {

  constructor(public navCtrl: NavController,
  private sqlite: SQLite, private toast: Toast) 
  { } 
  
  note = { title : "", content : "" };


  addNotes(){
    console.log(this.note);
      this.sqlite.create({name: 'Notes.db', location: 'default'}).then(
        (db: SQLiteObject ) => { 
          db.executeSql('INSERT INTO tbl_Notes VALUES(NULL,?,?)', [this.note.title, this.note.content])
          .then(res => {
              this.toast.show('Dados salvos', '5000', 'center').subscribe(
                toast => {
                  this.navCtrl.popToRoot();
                })
            })
        }).catch((x) => { 
          this.toast.show(x, '5000', 'center').subscribe(
            toast => {
              
            }
          );
        });
  }

  backHome(){
    this.navCtrl.pop();
  }

}


