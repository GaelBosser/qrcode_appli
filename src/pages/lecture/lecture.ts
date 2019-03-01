import { FileChooser } from '@ionic-native/file-chooser';
import { QrCodeProvider } from './../../providers/qr-code/qr-code';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DisplayAlertUtils } from '../../app/utils/displayAlertUtils';

@Component({
  selector: 'page-lecture',
  templateUrl: 'lecture.html'
})
export class LecturePage {

  scannedBool: boolean;
  scannedText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qrCode: QrCodeProvider, private displayAlert: DisplayAlertUtils, private fileChooser: FileChooser) { }

  btnLectureCamera(){
    this.scannedBool = true;
    this.qrCode.scannerQrCode().then(result => this.scannedText = result)
      .catch(err => this.displayAlert.presentAlert("Erreur", err.status, "Une erreur est survenue durant le scan."));
  }
  btnLectureFichier(){
    this.fileChooser.open()
      .then(uri => uri)
      .catch(e => this.displayAlert.presentAlert("Erreur", e.status, e));
  }
}
