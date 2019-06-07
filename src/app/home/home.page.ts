import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/env';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate;
  formattedDate;

  items = [];
  ref = firebase.database().ref('items/');
  firstname : string = '';
  lastname : string ='';

  constructor( navCtrl : NavController) {
    this.currentDate = new Date();
    this.getFormattedDate()



    this.ref.on('value', resp => {
      this.items = snapshotToArray(resp)
    });

    
  }
    addItem(item){
      if(item!==undefined && item!==null){
      let newItem = this.ref.push();
      newItem.set(item);
      this.firstname = '';
      this.lastname = '';
      }
      console.log(this.items);
    }
    getFormattedDate() {
    
      var dateObj = new Date()
  
      var year = dateObj.getFullYear().toString()
      var month = dateObj.getMonth().toString()
      var date = dateObj.getDate().toString()
  
      var hours = dateObj.getHours().toString()
      var minutes = dateObj.getMinutes().toString()
  
      this.formattedDate = year + '-' + month + '-' + date + '   ' + hours + ': ' + minutes;
    }
  }


 