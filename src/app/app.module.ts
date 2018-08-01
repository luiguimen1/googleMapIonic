import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

/******** Geolocalizacion*********/
import {Geolocation} from '@ionic-native/geolocation';
/************** Mi Servidor  ***********/
import {ConectarProvider} from '../providers/conectar/conectar';
import {NativeGeocoder} from '@ionic-native/native-geocoder';

/** Mis Page **/
import {BuscardireccionPage} from '../pages/buscardireccion/buscardireccion';
import {ListardoreccionPage} from '../pages/listardoreccion/listardoreccion';
import {VerrutaPage} from '../pages/verruta/verruta';




@NgModule({
    declarations: [
        MyApp,
        HomePage,
        BuscardireccionPage,
        ListardoreccionPage,
        VerrutaPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        BuscardireccionPage,
        ListardoreccionPage,
        VerrutaPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Geolocation,
        NativeGeocoder,
        ConectarProvider
    ]
})
export class AppModule {}
