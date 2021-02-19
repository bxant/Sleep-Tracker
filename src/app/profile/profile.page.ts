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
  
  constructor(public toastController: ToastController, 
              public storage :Storage, public sleepService:SleepService) {

   }

  ngOnInit() {
    this.storage.get("userFirstName").then((data) => {this.firstName = data});
    this.storage.get("userLastName").then((data) => {this.lastName = data});
    this.storage.get("userAge").then((data) => {this.userAge = data});
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
        duration: 3000,
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


}
