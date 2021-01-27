// LOGGING SLEEP PAGE

import { Component } from '@angular/core';

// Personal imports
import { ToastController } from '@ionic/angular';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepData } from '../data/sleep-data';
import { LogsleepService } from '../services/logsleep.service';

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
  constructor(public toastController: ToastController, public sleepService: LogsleepService,
    public storage:Storage) {
    // this.sleepService = SleepService;
  }

  // sleepStart is when user logs sleep
  private sleepStart:Date;
  // sleepEnd is when user logs when they wake up
  private sleepEnd:Date;

  // when the user inputs a different time on screen
  // this will turn to true
  private userLoggedStartSleep:boolean;
  private userLoggedEndSleep:boolean;

  
  get allSleepData() {
		return LogsleepService.AllSleepData;
	}

  userEnteredSleepStart()
  {
    // user interacted with timer button here also.
    // for: sleepStart
    this.userLoggedStartSleep = true;
    
  }

  userEnteredSleepEnd()
  {
    // means that user messed with the timer button
    // for: sleepEnd
    this.userLoggedEndSleep = true;
  }

  logSleep()
  {
    // just a placeholder function, will later be added to storage/array
    // for data collection

    // console for debugging
    // console.log(this.sleepStart);
    // console.log(this.sleepEnd);

    // this condition checked if user
    // actually changed the times from when they logged sleep.
    // will notify user if it is missing information using toast
    // notification.
    if (this.userLoggedEndSleep == true && this.userLoggedStartSleep == true){
			this.toastController.create({
				message: 'Sleep Logged Successfully!',
        duration: 2500,
        position: "top"		
				}).then((toast) => {
        toast.present();
        
        console.log("Sleep DATA should appear");
        var toLog = new OvernightSleepData(this.sleepStart, this.sleepEnd);
        this.sleepService.logOvernightData(toLog);
        this.storage.set("overnightSleep", toLog);
        console.log(this.allSleepData);
				});
			}
		else{
			this.toastController.create({
				message: 'Missing sleep information',
				duration: 2500,
				position: "top"		
				}).then((toast) => {
				toast.present();
				});
		}
  }

}
