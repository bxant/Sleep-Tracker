// USER PROFILE PAGE

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private firstName:string;
  private lastName:string;
  constructor() { }

   



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

  ngOnInit() {
  }

}
