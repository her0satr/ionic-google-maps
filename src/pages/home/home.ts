import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapRef: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {
  }
  
  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    // location
    const location = new google.maps.LatLng(51.507351, -0.127758);

    // map option
    const options = {
      center: location,
      zoom: 10,
      streetViewControl: false
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    // add marker
    this.addMarker(location, this.map);
  }

  addMarker(position, map) {
    return new google.maps.Marker({ position, map });
  }
}
