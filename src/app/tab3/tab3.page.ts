// MEDITATION PAGE


import { Component } from '@angular/core';


// toast notifications
import { MenuController, ToastController, AlertController } from '@ionic/angular';


//Ionic Storage
import { Storage } from '@ionic/storage';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';


import { generate } from 'shortid';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  alertInformation = [];

  meditationData = [];
  constructor(storage: Storage, toast:ToastController, private sleepService:SleepService,
    public alertController:AlertController) 
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
          this.meditationData.push(new StanfordSleepinessData(data.loggedValue, data.loggedAt, generate()));
          
        }
      }
    }, 2000);
  }

  removeTask(id)
  {
    // console.log("removing task");
    // this.meditationData.splice(index, 1);
    this.meditationData.splice(id,1);

  }

  async deleteMeditation(id:string) {
    const alert = await this.alertController.create({
      header: "Meditation",
      message: "Did you complete this meditation?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, 
        {
          text: 'Delete',
          cssClass: "danger",
          handler: () => {
            this.removeTask(id);
          }
        }]
    });
    await alert.present();
  }


  

}
