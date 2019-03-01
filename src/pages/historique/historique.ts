import { DisplayAlertUtils } from './../../app/utils/displayAlertUtils';
import { HistoriqueProvider } from './../../providers/historique/historique';
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

  isEmptyHistorique: boolean;
  historiques: Array<Historique>

  constructor(private navCtrl: NavController, public navParams: NavParams, public qrCode: QrCodeProvider,
    public historiqueProvider: HistoriqueProvider, public displayAlert: DisplayAlertUtils) {
    this.historiques = new Array<Historique>();
  }

  ionViewWillEnter(){
    this.historiqueProvider.getHistoriques().then(results => this.historiques = results)
      .catch(err => this.displayAlert.presentAlert("Erreur", "", err));
  }
}
