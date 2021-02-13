// LOG HISTORY FOR SLEEP/MEDITATION/NAPS

import { Component } from '@angular/core';
import { MenuController, ToastController, AlertController } from '@ionic/angular';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

import { SleepService } from '../services/sleep.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  allData:SleepData[] = [];
  selectedMonths = [];
  selectedDays = [];

  constructor(private sleepService:SleepService,
              private menu:MenuController, public toastController:ToastController,
              public alertController:AlertController) {
  }

  ngOnInit()
  {
    this.allData = this.sleepService.getAllValues();
  }

  public filteredMonths()
  {
    console.log("month filter");
    console.log(this.selectedMonths); 
  }

  public filteredDays()
  {
    console.log("day filter");
    console.log(this.selectedDays);
  }

  // tagsSelected = []
  // for (var i = 0; i < tagsSelected.length; i++)
  // {
  //   tagsSelected.push(tagsSe)
  // }

  // TODO: Need to bind the months to array that can be used
  // to filter through our sleep data.
  // Need to also bind days to array to use for filtering of data.

  //TODO: need to be able to also bind both days and months to our information.
  // probably use a boolean value to ensure that our days are
  // actually "filterable" <-- not sure if that's a word
  // but I hope you get the idea.

  deleteData(id:string) {
    this.sleepService.deleteFromStorage(id);
    this.allData = this.sleepService.getAllValues();
    this.toastController.create(
			{
				message: "Deleted Entry",
				duration: 2000
			}).then((toast)=>{toast.present()});
  }
  
  clearStorage() {
    this.sleepService.clearStorage();
    this.allData = this.sleepService.getAllValues();
    this.toastController.create(
			{
        message: "All Entries Deleted",
        color: "medium",
				duration: 2000
			}).then((toast)=>{toast.present()});
  }

  async confirmDelete(id:string) {
    const alert = await this.alertController.create({
      header: "Delete Entry",
      message: "Are you sure you want to delete this entry?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, 
        {
          text: 'Delete',
          cssClass: "danger",
          handler: () => {
            this.deleteData(id);
          }
        }]
    });
    await alert.present();
  }

  async confirmClear() {
    const alert = await this.alertController.create({
      header: "Delete All Logs",
      message: "Are you sure you want to delete all logs?<br><br><strong>This action cannot be undone.</strong>",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, 
        {
          text: 'Delete',
          cssClass: "danger",
          handler: () => {
            this.clearStorage();
          }
        }]
    });
    await alert.present();
  }
}
