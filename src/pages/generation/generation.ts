import { HistoriqueProvider } from './../../providers/historique/historique';
import { SocialSharing } from '@ionic-native/social-sharing';
import { QRCodeComponent } from 'angularx-qrcode';
import { Historique } from './../../app/model/historique';
import { DisplayAlertUtils } from './../../app/utils/displayAlertUtils';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QrCodeProvider } from '../../providers/qr-code/qr-code';

@Component({
  selector: 'page-generation',
  templateUrl: 'generation.html'
})
export class GenerationPage {
  @ViewChild('qrcode') qrcodeElement:QRCodeComponent;

  textToEncoded: string = "";
  historique: Historique;
  btnGenerateClicked: boolean;

  encodeText(){
    if(this.textToEncoded != undefined && this.textToEncoded.trim() != ""){
      this.btnGenerateClicked = true;
      let historique: Historique = new Historique();
      historique.text = this.textToEncoded.trim();
      historique.date = new Date();

      this.historiqueProvider.addHistoriqueQrCode(historique);
    }
    else{
      this.displayAlert.presentAlert("Alert", "" , "Vous devez renseigner le texte à encoder");
    }
  }

  shareQrCode(){
    let urlImageQrCode: string = this.qrcodeElement.el.nativeElement.children[1].src;
    this.socialSharing.share(null, null, urlImageQrCode).catch(err => 
      this.displayAlert.presentAlert("Erreur", err.status, "Une erreur est survenue durant le partage du QR Code."));
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public displayAlert: DisplayAlertUtils,
    public qrCode: QrCodeProvider, private socialSharing: SocialSharing, private historiqueProvider: HistoriqueProvider) {
  }

}
