// LOGGING SLEEP PAGE

import { Component } from '@angular/core';

// Personal imports
import { ToastController } from '@ionic/angular';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepData } from '../data/sleep-data';
import { LogsleepService } from '../services/logsleep.service';
import { SleepService } from '../services/sleep.service';

// Ionic Storage
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  // constructor has toastController to ensure we can
  // notify user when they press buttons/do certain actions.
  constructor(public toastController: ToastController, 
    public storage :Storage, private sleepService: SleepService) {
  }

  // Time/Date of when the user started and ended their sleep
  private sleepStart:string;
  private sleepEnd:string;

  // Store sleep data with SleepService
  async logSleep()
  {
    // If times are entered, log data and give success notif
    if (this.sleepStart != undefined && this.sleepEnd != undefined){
      var data = new OvernightSleepData(new Date(this.sleepStart), new Date(this.sleepEnd));
      console.log("date string prints");
      console.log(data);
      this.sleepService.addToStorage(data);
      const add_toast = await this.toastController.create(
      {
        message: "Sleep Data Logged",
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
				message: 'Missing Sleep Information',
        duration: 3000,
        color: "medium",
        position: "top",	
				}).then((toast) => {
				toast.present();
				});
		}
  }

}
