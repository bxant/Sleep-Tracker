import { Component } from '@angular/core';

// Personal imports
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // constructor has toastController to ensure we can
  // notify user when they press buttons/do certain actions.
  constructor(public toastController: ToastController) {}

  // sleepStart is when user logs sleep
  private sleepStart:Date;
  // sleepEnd is when user logs when they wake up
  private sleepEnd:Date;

  private userLoggedStartSleep:boolean;
  private userLoggedEndSleep:boolean;


  userEnteredSleepStart()
  {
    this.userLoggedStartSleep = true;
  }

  userEnteredSleepEnd()
  {
    this.userLoggedEndSleep = true;
  }

  logSleep()
  {
    // just a placeholder function, will later be added to storage/array
    // for data collection
    console.log(this.sleepStart);
    console.log(this.sleepEnd);
    if (this.userLoggedEndSleep == true && this.userLoggedStartSleep == true){
			this.toastController.create({
				message: 'Sleep Logged Successfully!',
        duration: 3000,
        position: "top"		
				}).then((toast) => {
				toast.present();
				});
			}
		else{
			this.toastController.create({
				message: 'Missing sleep information',
				duration: 3000,
				position: "top"		
				}).then((toast) => {
				toast.present();
				});
		}
  }

}
