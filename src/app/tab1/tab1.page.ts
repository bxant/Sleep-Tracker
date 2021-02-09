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
import { ScheduleData } from '../data/schedule-entry';

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
  private scheduleDay:string;
  private sleepStart:string;
  private sleepEnd:string;
  private scheduleStart:string;
  private scheduleEnd:string;

  // Store sleep data with SleepService
  async logSleep()
  {
    console.log(this.sleepStart);
    // If times are entered, log data and give success notif
    if (this.sleepStart != undefined && this.sleepEnd != undefined){
      var data = new OvernightSleepData(new Date(this.sleepStart), new Date(this.sleepEnd));
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

  async logSchedule()
  {
    // If times are entered, log data and give success notif
    console.log("day");
    console.log(this.scheduleDay);
    console.log(this.scheduleEnd);
    console.log(this.scheduleStart);
    if (this.scheduleDay != undefined && this.scheduleStart != undefined && this.scheduleEnd != undefined){
      var data = new ScheduleData(this.scheduleDay, new Date(this.scheduleStart), new Date(this.scheduleEnd));
      this.sleepService.addToStorage(data);
      const add_toast = await this.toastController.create(
      {
        message: "Schedule Data Logged",
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
