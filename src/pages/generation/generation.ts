import { DisplayAlertUtils } from './../../app/utils/displayAlertUtils';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-generation',
  templateUrl: 'generation.html'
})
export class GenerationPage {

  textToEncoded: string = "";
  btnPartageDisabled: boolean;

  encodeText(){
    if(this.textToEncoded != undefined && this.textToEncoded.trim() != ""){
      this.navCtrl.push(GenerationPage, { itemToEncoded: this.textToEncoded, btnPartage: true  });
    }
    else{
      this.displayAlert.presentAlert("Alert", "", "Vous devez renseigner le texte à encoder");
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public displayAlert: DisplayAlertUtils) {
    this.textToEncoded = navParams.get('itemToEncoded');
    this.btnPartageDisabled = navParams.get('btnPartage');
  }

}
