import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DestinationPage } from '../destination/destination';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  GoToDestination(){
    //this.navCtrl.push(DestinationPage);
    /*
    * Se puede configurar la transcisión pasandole un tercer
    * argumento a push() o un primer argumento a pop(), argumento: NavigationOptions
    */

    this.navCtrl.push(DestinationPage, {} , {
      direction: 'back', //default for push is forward
      duration: 2000, // 2 segundos
      easing: 'ease-out'
    });
  }
}
