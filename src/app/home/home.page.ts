import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data:string='';
  constructor(private flashlight: Flashlight, private vibration: Vibration, private geolocation: Geolocation) {}

  turnOnFlash(){
    console.log("hello you in flash");
    this.flashlight.switchOn();
  }


  turnOffFlash(){
    console.log("hello you in flash");
    this.flashlight.switchOff();
  }

  VibrateBtn(){
    console.log("you vibrate");
    this.vibration.vibrate(1000);
  }

  geoLocation(){
     console.log("get lcation");

     this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.data = 'Latitude' + resp.coords.latitude + '  ' +  'Longitude' + resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     


  }



}
