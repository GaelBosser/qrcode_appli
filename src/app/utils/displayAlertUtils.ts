import { IAlert } from './../interfaces/Ialert';
import { Injectable } from '@angular/core';
import { AlertController, AlertButton } from "ionic-angular";

@Injectable()
export class DisplayAlertUtils implements IAlert{

    constructor(private alertController: AlertController){}

    async presentAlert(titleAlert: string, subTitleAlert: string, messageAlert: string, buttonsAlert: (string | AlertButton)[] = ['OK']): Promise<any> {
      
        const alert = await this.alertController.create({
          title: titleAlert,
          subTitle: subTitleAlert,
          message: messageAlert,
          buttons: buttonsAlert
        });
        return await alert.present();
      }
}