// MEDITATION PAGE


import { Component } from '@angular/core';


// toast notifications
import { MenuController, ToastController, AlertController } from '@ionic/angular';


//Ionic Storage
import { Storage } from '@ionic/storage';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';


import { MeditationData } from '../data/meditation-data';
import { NapData } from '../data/nap-data';
import { generate } from 'shortid';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  alertInformation = [];

  meditationorNapData = [];
  private typeData:string;
  constructor(storage: Storage, toast:ToastController, private sleepService:SleepService,
    public alertController:AlertController) 
  {

  }

  ngOnInit()
  {
    this.alertInformation = this.sleepService.getAlertData();
    this.determineIfMeditationNeeded();
    
  }

  determineIfMeditationNeeded()
  {

    setTimeout(() => {
      console.log(JSON.stringify(this.alertInformation));
      for (var data of this.alertInformation)
      {
        if (data.loggedValue >= 3 && data.loggedValue < 6)
        {
          this.meditationorNapData.push(new MeditationData(data.loggedValue, data.loggedAt));
          this.typeData = "Meditation";
        }
        else if (data.loggedValue >= 6)
        {
          this.meditationorNapData.push(new NapData(data.loggedValue, data.loggedAt));
          this.typeData = "Nap";
        }
      }
    }, 2000);
    console.log("this stuff");
    console.log(this.meditationorNapData);
  }

  removeTask(id)
  {
    this.meditationorNapData.splice(id,1);
  }

  async deleteMeditation(id:string, type:string) {
    const alert = await this.alertController.create({
      header: type,
      message: "Did you complete this "+ type +"?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, 
        {
          text: 'Complete',
          cssClass: "cool",
          handler: () => {
            this.removeTask(id);
          }
        }]
    });
    await alert.present();
  }


  

}
