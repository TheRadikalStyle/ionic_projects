import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google; //Variable global



@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.getPosition();
  }


  /* Get device's position */
  getPosition():any{
  this.geolocation.getCurrentPosition().then(response => {
    this.loadMap(response);
  })
  .catch(error =>{
    console.log(error);
  })
  }

 /* Recibe los parametros de posición y posiciona el mapa */
  loadMap(position: Geoposition){
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
    zoom: 12
  });

  google.maps.event.addListenerOnce(this.map, 'idle', () => {
    let marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: 'Hello World!'
    });
    mapEle.classList.add('show-map');
  });
}


}
