import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Geolocation, Geoposition} from '@ionic-native/geolocation';
import {NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions} from '@ionic-native/native-geocoder';
declare var google;

/**
 * Generated class for the BuscardireccionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-buscardireccion',
    templateUrl: 'buscardireccion.html',
})
export class BuscardireccionPage {
    estado = false;
    direccion;
    mensaje;
    map;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private geolocation: Geolocation,
        private nativeGeocoder: NativeGeocoder) {
    }
    buscarMapa() {
        let options: NativeGeocoderOptions = {
            useLocale: true,
            maxResults: 5
        };

        this.nativeGeocoder.forwardGeocode(this.direccion, options)
            .then((coordinates: NativeGeocoderForwardResult[]) => {
                this.mensaje = 'The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude;
                this.estado = true;
            })
            .catch((error: any) => {
                this.mensaje = "hay un error";
                this.estado = true;
                console.log(error);
            });
    }

    ionViewDidLoad() {
        this.getPosition();
        this.estado = true;
    }

    getPosition(): any {
        this.geolocation.getCurrentPosition()
            .then(response => {
                this.loadMap(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    loadMap(position: Geoposition) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(latitude, longitude);
        // create a new map by passing HTMLElement
        let mapEle: HTMLElement = document.getElementById('map');
        // create LatLng object
        let myLatLng = {lat: latitude, lng: longitude};
        // create map
        this.map = new google.maps.Map(mapEle, {
            center: myLatLng,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        let marker;
        google.maps.event.addListenerOnce(this.map, 'idle', () => {
            marker = new google.maps.Marker({
                position: myLatLng,
                map: this.map,
                draggable: true,
                icon: "assets/youbi.png",
                title: 'Estoy Aqui!'
            });
            this.OptenerPosicion(marker);
            mapEle.classList.add('show-map');
        });
    }

    OptenerPosicion(marker) {
        google.maps.event.addListener(marker, 'dragend', () => {
            this.elmensaje(marker);
        });
    }

    elmensaje(marker) {
        let LastLat = marker.position.lat();
        let LastLng = marker.position.lng();
        this.mensaje = 'Mi latitud ' + LastLat + ', Mi logitud es ' + LastLng;
        console.log('Mi latitud ' + LastLat + ', Mi logitud es ' + LastLng);
    }
}
