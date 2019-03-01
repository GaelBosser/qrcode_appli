import { Historique } from './../../app/model/historique';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Injectable()
export class QrCodeProvider {

  private historiques: Array<Historique>;

  constructor(private http: HttpClient, private scanner: BarcodeScanner) {
    this.historiques = new Array<Historique>();
  }

  getHistoriques(): Array<Historique>{
    return this.historiques;
  }

  generateQrCodeHistory(historique: Historique): void {
    this.historiques.push(historique);
  }

  scannerQrCode(): Promise<string>{
    return new Promise<string>((resolve) => resolve(
      this.scanner.scan().then(scanResult => scanResult.text)));
  }
}
