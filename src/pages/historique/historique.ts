import { QrCodeProvider } from './../../providers/qr-code/qr-code';
import { Historique } from './../../app/model/historique';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-historique',
  templateUrl: 'historique.html',
})
export class HistoriquePage {

  historiques: Array<Historique>

  constructor(public navCtrl: NavController, public navParams: NavParams, public qrCode: QrCodeProvider) {
    this.historiques = new Array<Historique>();
  }

  ionViewWillEnter(){
    this.historiques = this.qrCode.getHistoriques();
  }
}
