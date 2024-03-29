import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SocialSharing } from '@ionic-native/social-sharing';
import { DisplayAlertUtils } from './utils/displayAlertUtils';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { GenerationPage } from '../pages/generation/generation';
import { LecturePage } from '../pages/lecture/lecture';
import { HistoriquePage } from '../pages/historique/historique';
import { FileChooser } from '@ionic-native/file-chooser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicStorageModule } from '@ionic/storage'
import { HistoriqueProvider } from '../providers/historique/historique';

@NgModule({
  declarations: [
    MyApp,
    GenerationPage,
    LecturePage,
    HistoriquePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    QRCodeModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GenerationPage,
    LecturePage,
    HistoriquePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrCodeProvider,
    DisplayAlertUtils,
    SocialSharing,
    BarcodeScanner,
    FileChooser,
    HistoriqueProvider,
    
  ]
})
export class AppModule {}
