import { AlertButton } from 'ionic-angular';

export interface IAlert{
    presentAlert(titleAlert: string, subTitleAlert: string, messageAlert: string, buttonsAlert: (string | AlertButton)[]): Promise<any>

}