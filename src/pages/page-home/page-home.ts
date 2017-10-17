import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';
import { AddData } from '../add-data/add-data';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public notes: any [];
  public banco: string;
  public b: string; 

  constructor(public navCtrl: NavController,public sqlite: SQLite) 
  {  }
  
  ionViewDidLoad() {
    this.getData();
  }

  ionViewWillEnter() {
    this.getData();
  }

  getData() {
    this.sqlite.create({name: 'Notes.db', location: 'default'})
    .then((db: SQLiteObject) => { 
        db.executeSql('CREATE TABLE IF NOT EXISTS tbl_Notes(id INTEGER PRIMARY KEY, title TEXT, content TEXT)', {})
        .then(res => console.log('Executed SQL'))
        .catch(e => console.log(e));
        db.executeSql('SELECT * FROM tbl_Notes ORDER BY id DESC', {})
          .then(res => {
            this.notes = [];
            for(var i=0; i<res.rows.length; i++) {
              this.notes.push({id:res.rows.item(i).id, 
                                date:res.rows.item(i).title,
                                content:res.rows.item(i).content})
            }
          })
    })
  }

  delData(){
    this.navCtrl.push(AddData);
  }

  updateData(){

  }



//Chama modal para adicionar Notas
  addNotes() {
    this.navCtrl.push(AddData);
  }
}
