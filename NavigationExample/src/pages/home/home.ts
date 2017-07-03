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

  GoToDestiny(){
    this.navCtrl.push(DestinationPage);
  }

}
