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

   



  firstNameChanged()
  {
    
    console.log("firstName changed");
    console.log(this.firstName);
    console.log("should have printed name");  }

  lastNameChanged()
  {
  
    console.log("printing Last name");
    
    console.log(this.lastName);
    console.log("should have printed last name");  
  }

  updateAge()
  {
    console.log(this.userAge);

  }

  ngOnInit() {
    // this.firstName = "Peter";
    // this.lastName = "Anteater";
    // this.userAge = 22;
    this.storage.get("userAge");
    this.storage.get("userFirstName");
    this.storage.get("userLastName");
    
  }

  async updateUserInfo()
  {
    
    this.storage.set("userAge", this.userAge);
    this.storage.set("userFirstName", this.firstName);
    this.storage.set("userLastName", this.lastName);

    this.storage.get("userAge");
    this.storage.get("userFirstName");
    this.storage.get("userLastName");
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
