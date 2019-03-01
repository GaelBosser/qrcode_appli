import { Historique } from './../../app/model/historique';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QrCodeProvider {

  private historiques: Array<Historique>;

  constructor(private http: HttpClient) {
    this.historiques = new Array<Historique>();
  }

  getHistoriques(): Array<Historique>{
    return this.historiques;
  }

  generateQrCodeHistory(historique: Historique): void {
    this.historiques.push(historique);
  }
}
