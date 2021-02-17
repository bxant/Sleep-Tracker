// LOGGING SLEEP PAGE

import { Component } from '@angular/core';

// Personal imports
import { ToastController, NavController } from '@ionic/angular';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepData } from '../data/sleep-data';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  // constructor has toastController to ensure we can
  // notify user when they press buttons/do certain actions.
  constructor(public toastController: ToastController, public navController: NavController,
 private sleepService: SleepService) {
  }

  // Time/Date of when the user started and ended their sleep
  private sleepStart:string;
  private sleepEnd:string;

  public alertScale:String[];
  private alertFactor:number;

  ngOnInit()
  {
    this.alertScale = StanfordSleepinessData.ScaleValues;
  }

  // Store sleep data with SleepService
  async logSleep()
  {
    // If times are entered, log data and give success notif
    if (this.sleepStart != undefined && this.sleepEnd != undefined){
      if(Date.parse(this.sleepEnd) > Date.parse(this.sleepStart))
      {
        var data = new OvernightSleepData(new Date(this.sleepStart), new Date(this.sleepEnd));
        this.sleepService.addToStorage(data);
        // const add_toast = await this.toastController.create(
        // {
        //   message: "Sleep Data Logged",
        //   color: "medium",
        //   duration: 3000,
        //   buttons: [
        //     {
        //       text: "Undo",
        //       handler: () => {
        //         this.sleepService.deleteFromStorage(data.id);
        //       }
        //     }
        //   ]
        // });
        // add_toast.present();
        this.navController.navigateForward(["/daily-brief", data.sleepTime() / 60]);
      }
      else
      {
        const add_toast = await this.toastController.create(
          {
            message: "Invalid Date Range, please try again.",
            color: "medium",
            duration: 3000,
          
          });
          add_toast.present();
      }
    }
		else{
			this.toastController.create({
				message: 'Missing Sleep Information',
        duration: 3000,
        color: "medium",
        position: "top",
      }).then((toast) => {
				toast.present();
      });
		}
  }

  async logAlertness()
  {
    if (this.alertFactor  != undefined)
    {
      console.log("Level of alertness printing");
      console.log(this.alertFactor);
      console.log("alertness level was printed");
      var dayOfAlertness = new Date();
      var data = new StanfordSleepinessData(this.alertFactor, dayOfAlertness);
      this.sleepService.addToStorage(data);
      console.log("alertness was logged");
      const add_toast = await this.toastController.create(
      {
        message: "Alertness Logged",
        color: "medium",
        duration: 3000,
        buttons: [
          {
            text: "Undo",
            handler: () => {
              this.sleepService.deleteFromStorage(data.id);
            }
          }
        ]
      });
      add_toast.present();
    }
		else{
			this.toastController.create({
				message: 'Missing Alertness Information',
        duration: 3000,
        color: "medium",
        position: "top",	
      }).then((toast) => {
				toast.present();
      });
		}
  }
}
