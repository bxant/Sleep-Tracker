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
  
  private scheduleStartSunday:Date;
  private scheduleEndSunday:Date;
  private scheduleStartMonday:Date;
  private scheduleEndMonday:Date;
  private scheduleStartTuesday:Date;
  private scheduleEndTuesday:Date;
  private scheduleStartWednesday:Date;
  private scheduleEndWednesday:Date;
  private scheduleStartThursday:Date;
  private scheduleEndThursday:Date;
  private scheduleStartFriday:Date;
  private scheduleEndFriday:Date;
  private scheduleStartSaturday:Date;
  private scheduleEndSaturday:Date;
  constructor(public toastController: ToastController, 
              public storage :Storage, public sleepService:SleepService) {

   }

  ngOnInit() {
    this.storage.get("userFirstName").then((data) => {this.firstName = data});
    this.storage.get("userLastName").then((data) => {this.lastName = data});
    this.storage.get("userAge").then((data) => {this.userAge = data});

    this.storage.get("preferredSleepStart").then((data) => {this.preferredSleepStart = data});
    this.storage.get("preferredWakeUp").then((data) => {this.preferredWakeUp = data});

    this.storage.get("scheduleStartSunday").then((data) => {this.scheduleStartSunday = data});
    this.storage.get("scheduleEndSunday").then((data) => {this.scheduleEndSunday = data});
    this.storage.get("scheduleStartMonday").then((data) => {this.scheduleStartMonday = data});
    this.storage.get("scheduleEndMonday").then((data) => {this.scheduleEndMonday = data});
    this.storage.get("scheduleStartTuesday").then((data) => {this.scheduleStartTuesday = data});
    this.storage.get("scheduleEndTuesday").then((data) => {this.scheduleEndTuesday = data});
    this.storage.get("scheduleStartWednesday").then((data) => {this.scheduleStartWednesday = data});
    this.storage.get("scheduleEndWednesday").then((data) => {this.scheduleEndWednesday = data});
    this.storage.get("scheduleStartThursday").then((data) => {this.scheduleStartThursday = data});
    this.storage.get("scheduleEndThursday").then((data) => {this.scheduleEndThursday = data});
    this.storage.get("scheduleStartFriday").then((data) => {this.scheduleStartFriday = data});
    this.storage.get("scheduleEndFriday").then((data) => {this.scheduleEndFriday = data});
    this.storage.get("scheduleStartSaturday").then((data) => {this.scheduleStartSaturday = data});
    this.storage.get("scheduleEndSaturday").then((data) => {this.scheduleEndSaturday = data});
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

  async logScheduleSunday()
   {
    console.log(this.scheduleEndSunday);
    console.log(this.scheduleStartSunday);
     // If times are entered, log data and give success notif
     if (this.scheduleStartSunday != undefined && this.scheduleEndSunday != undefined)
     
     {
       if(this.scheduleEndSunday > this.scheduleStartSunday)
       {
       this.storage.set("scheduleEndSunday", this.scheduleEndSunday);
       this.storage.set("scheduleStartSunday", this.scheduleStartSunday);
       const add_toast = await this.toastController.create(
        {
          message: "Updated Sunday Schedule",
          color: "medium",
          duration: 3000,
          buttons: [
            {
              text: "Undo",
              handler: () => {
                this.storage.remove("scheduleEndSunday");
                this.storage.remove("scheduleStartSunday");
              }
            }
          ]
        });
      add_toast.present();
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
  }
  async logScheduleMonday()
  {
   console.log(this.scheduleEndMonday);
   console.log(this.scheduleStartMonday);
    // If times are entered, log data and give success notif
    if (this.scheduleStartMonday != undefined && this.scheduleEndMonday != undefined)
    
    {
      if(this.scheduleEndMonday > this.scheduleStartMonday)
      {
      this.storage.set("scheduleEndMonday", this.scheduleEndMonday);
      this.storage.set("scheduleStartMonday", this.scheduleStartMonday);
      const add_toast = await this.toastController.create(
       {
         message: "Updated Monday Schedule",
         color: "medium",
         duration: 3000,
         buttons: [
           {
             text: "Undo",
             handler: () => {
               this.storage.remove("scheduleEndMonday");
               this.storage.remove("scheduleStartMonday");
             }
           }
         ]
       });
     add_toast.present();
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
 }

 async logScheduleTuesday()
   {
    console.log(this.scheduleEndTuesday);
    console.log(this.scheduleStartTuesday);
     // If times are entered, log data and give success notif
     if (this.scheduleStartTuesday != undefined && this.scheduleEndTuesday != undefined)
     
     {
       if(this.scheduleEndTuesday > this.scheduleStartTuesday)
       {
       this.storage.set("scheduleEndTuesday", this.scheduleEndTuesday);
       this.storage.set("scheduleStartTuesday", this.scheduleStartTuesday);
       const add_toast = await this.toastController.create(
        {
          message: "Updated Tuesday Schedule",
          color: "medium",
          duration: 3000,
          buttons: [
            {
              text: "Undo",
              handler: () => {
                this.storage.remove("scheduleEndTuesday");
                this.storage.remove("scheduleStartTuesday");
              }
            }
          ]
        });
      add_toast.present();
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
  }

  async logScheduleWednesday()
   {
    console.log(this.scheduleEndWednesday);
    console.log(this.scheduleStartWednesday);
     // If times are entered, log data and give success notif
     if (this.scheduleStartWednesday != undefined && this.scheduleEndWednesday != undefined)
     
     {
       if(this.scheduleEndWednesday > this.scheduleStartWednesday)
       {
       this.storage.set("scheduleEndWednesday", this.scheduleEndWednesday);
       this.storage.set("scheduleStartWednesday", this.scheduleStartWednesday);
       const add_toast = await this.toastController.create(
        {
          message: "Updated Wednesday Schedule",
          color: "medium",
          duration: 3000,
          buttons: [
            {
              text: "Undo",
              handler: () => {
                this.storage.remove("scheduleEndWednesday");
                this.storage.remove("scheduleStartWednesday");
              }
            }
          ]
        });
      add_toast.present();
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
  }

  async logScheduleThursday()
   {
    console.log(this.scheduleEndThursday);
    console.log(this.scheduleStartThursday);
     // If times are entered, log data and give success notif
     if (this.scheduleStartThursday != undefined && this.scheduleEndThursday != undefined)
     
     {
       if(this.scheduleEndThursday > this.scheduleStartThursday)
       {
       this.storage.set("scheduleEndThursday", this.scheduleEndThursday);
       this.storage.set("scheduleStartThursday", this.scheduleStartThursday);
       const add_toast = await this.toastController.create(
        {
          message: "Updated Thursday Schedule",
          color: "medium",
          duration: 3000,
          buttons: [
            {
              text: "Undo",
              handler: () => {
                this.storage.remove("scheduleEndThursday");
                this.storage.remove("scheduleStartThursday");
              }
            }
          ]
        });
      add_toast.present();
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
  }

  async logScheduleFriday()
   {
    console.log(this.scheduleEndFriday);
    console.log(this.scheduleStartFriday);
     // If times are entered, log data and give success notif
     if (this.scheduleStartFriday != undefined && this.scheduleEndFriday != undefined)
     
     {
       if(this.scheduleEndFriday > this.scheduleStartFriday)
       {
       this.storage.set("scheduleEndFriday", this.scheduleEndFriday);
       this.storage.set("scheduleStartFriday", this.scheduleStartFriday);
       const add_toast = await this.toastController.create(
        {
          message: "Updated Friday Schedule",
          color: "medium",
          duration: 3000,
          buttons: [
            {
              text: "Undo",
              handler: () => {
                this.storage.remove("scheduleEndFriday");
                this.storage.remove("scheduleStartFriday");
              }
            }
          ]
        });
      add_toast.present();
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
  }

  async logScheduleSaturday()
   {
    console.log(this.scheduleEndSaturday);
    console.log(this.scheduleStartSaturday);
     // If times are entered, log data and give success notif
     if (this.scheduleStartSaturday != undefined && this.scheduleEndSaturday != undefined)
     
     {
       if(this.scheduleEndSaturday > this.scheduleStartSaturday)
       {
       this.storage.set("scheduleEndSaturday", this.scheduleEndSaturday);
       this.storage.set("scheduleStartSaturday", this.scheduleStartSaturday);
       const add_toast = await this.toastController.create(
        {
          message: "Updated Saturday Schedule",
          color: "medium",
          duration: 3000,
          buttons: [
            {
              text: "Undo",
              handler: () => {
                this.storage.remove("scheduleEndSaturday");
                this.storage.remove("scheduleStartSaturday");
              }
            }
          ]
        });
      add_toast.present();
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
  }

}
