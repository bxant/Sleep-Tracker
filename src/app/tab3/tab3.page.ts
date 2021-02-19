// MEDITATION PAGE


import { Component } from '@angular/core';


// toast notifications
import { ToastController } from '@ionic/angular';

//Ionic Storage
import { Storage } from '@ionic/storage';
import { SleepService } from '../services/sleep.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  alertInformation = [];

  meditationData = [];
  constructor(storage: Storage, toast:ToastController, private sleepService:SleepService) 
  {

  }

  ngOnInit()
  {
    this.alertInformation = this.sleepService.getAlertData();
    // console.log("alert info");
    // console.log(this.alertInformation);
    // console.log("determining");
    this.determineIfMeditationNeeded();
    // console.log("actual meditaiton data");
    // console.log(this.meditationData);
    
  }

  determineIfMeditationNeeded()
  {

    setTimeout(() => {
      console.log(JSON.stringify(this.alertInformation));
      for (var data of this.alertInformation)
      {
        if (data.loggedValue >= 3)
        {
          this.meditationData.push(data);
          
        }
      }
    }, 2000);
  }


  giveMeditationTimes()
  {
    var meditationTimes = {};
    
    
  }

  

}
