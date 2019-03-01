import { Historique } from './../../app/model/historique';
import { DisplayAlertUtils } from './../../app/utils/displayAlertUtils';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QrCodeProvider } from '../../providers/qr-code/qr-code';

@Component({
  selector: 'page-generation',
  templateUrl: 'generation.html'
})
export class GenerationPage {

  textToEncoded: string = "";
  historique: Historique;
  btnGenerateClicked: boolean;

  encodeText(){
    if(this.textToEncoded != undefined && this.textToEncoded.trim() != ""){
      this.btnGenerateClicked = true;

      let historique: Historique = new Historique();
      historique.text = this.textToEncoded.trim();
      let dateHistorique: Date = new Date();
      historique.date = dateHistorique.toLocaleDateString() + " " + dateHistorique.toLocaleTimeString();
      this.qrCode.generateQrCodeHistory(historique);
    }
    else{
      this.displayAlert.presentAlert("Alert", "" , "Vous devez renseigner le texte à encoder");
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public displayAlert: DisplayAlertUtils,
    public qrCode: QrCodeProvider) {
  }

}
