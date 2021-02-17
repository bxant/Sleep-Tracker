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
  
  public searchDataBackup:SleepData[];

  public alertnessData:StanfordSleepinessData[];

  

  ngOnInit()
  {
    this.allData = this.sleepService.getAllValues();
    this.searchDataBackup = this.allData;
    this.alertnessData = SleepService.AllSleepinessData;
  }

  
  public filterResults(ev: CustomEvent)
  {
    this.allData = this.searchDataBackup;
    const val = ev.detail.value;
    
    if (val && val.trim() !== '')
    {
      this.allData = this.allData.filter(term => {
        return term.summaryString().toLowerCase().indexOf(val.trim().toLowerCase()) > -1 || 
        term.dateString().toLowerCase().indexOf(val.trim().toLowerCase()) > -1 ||
        term.typeString().toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      })
    }
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
