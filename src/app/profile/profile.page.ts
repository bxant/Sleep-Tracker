// USER PROFILE PAGE

import { Component, OnInit } from '@angular/core';

// Ionic Storage
import { Storage } from '@ionic/storage';

// Toast
import { ToastController } from '@ionic/angular';

// schedule-entry
import { ScheduleEntry } from '../data/schedule-entry';
import { SleepService } from '../services/sleep.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private firstName:string;
  private lastName:string;
  private userAge:number;

  private preferredSleepStart:Date;
  private preferredWakeUp:Date;
  
  constructor(public toastController: ToastController, 
              public storage :Storage, public sleepService:SleepService) {

   }

  ngOnInit() {
    this.storage.get("userFirstName").then((data) => {this.firstName = data});
    this.storage.get("userLastName").then((data) => {this.lastName = data});
    this.storage.get("userAge").then((data) => {this.userAge = data});

    this.storage.get("preferredSleepStart").then((data) => {this.preferredSleepStart = data});
    this.storage.get("preferredWakeUp").then((data) => {this.preferredWakeUp = data});
  }

  async updateUserInfo()
  {
    this.storage.set("userAge", this.userAge);
    this.storage.set("userFirstName", this.firstName);
    this.storage.set("userLastName", this.lastName);
    const add_toast = await this.toastController.create(
      {
        message: "Updated User Info!",
        color: "medium",
        duration: 2000,
        buttons: [
          {
            text: "Undo",
            handler: () => {
              this.storage.remove("userAge");
              this.storage.remove("userLastName");
              this.storage.remove("userFirstName");
            }
          }
        ]
      });
    add_toast.present();
  }

  async updateGoals() 
  {
    this.storage.set("preferredSleepStart", this.preferredSleepStart);
    this.storage.set("preferredWakeUp", this.preferredWakeUp);
    const add_toast = await this.toastController.create(
      {
        message: "Updated Goals!",
        color: "medium",
        duration: 2000,
        buttons: [
          {
            text: "Undo",
            handler: () => {
              this.storage.remove("preferredSleepStart");
              this.storage.remove("preferredGoals");
            }
          }
        ]
      });
    add_toast.present();
  }
}
