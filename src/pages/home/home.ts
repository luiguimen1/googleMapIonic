import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BuscardireccionPage} from '../buscardireccion/buscardireccion';
import {ListardoreccionPage} from '../listardoreccion/listardoreccion';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {
    }

    /**
     * Metodo que permite ir a la page de BuscarDirección
     */
    irBuscar() {
        this.navCtrl.push(BuscardireccionPage);
    }
    /**
     * Metodo que permite ir a la page de ListarDirección
     */
    irListar() {
        this.navCtrl.push(ListardoreccionPage);
    }

}
