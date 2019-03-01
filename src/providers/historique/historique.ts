import { Historique } from './../../app/model/historique';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

const QRCODE_KEY = "qrcode";

@Injectable()
export class HistoriqueProvider {

  addHistoriqueQrCode(historique: Historique) {
    this.storage.set(this.getQrCodeKey(historique), JSON.stringify(historique));
  }
 
  private getQrCodeKey(historique: Historique) {
    return QRCODE_KEY + historique.text + historique.date;
  }
 
  getHistoriques(): Promise<Historique[]> {
    return new Promise(resolve => {
      let results: Historique[] = [];
      this.storage
        .keys()
        .then(keys => keys.filter(key => key.includes(QRCODE_KEY)).forEach(key => this.storage.get(key)
          .then(data => results.push(JSON.parse(data)))));
      return resolve(results);
    });
  }

  constructor(private http: HttpClient, private storage: Storage) {
  }

}
