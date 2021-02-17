import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/Angular';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-daily-brief',
  templateUrl: './daily-brief.page.html',
  styleUrls: ['./daily-brief.page.scss'],
})
export class DailyBriefPage implements OnInit {

  constructor(public navController: NavController, private sleepService: SleepService) { }

  ngOnInit() {
  }

  getTimeSlept()
  {

  }

  recommendBedtime()
  {

  }

  leavePage()
  {
    this.navController.back();
  }

}
