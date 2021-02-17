import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/Angular';
import { SleepService } from '../services/sleep.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-daily-brief',
  templateUrl: './daily-brief.page.html',
  styleUrls: ['./daily-brief.page.scss'],
})
export class DailyBriefPage implements OnInit {
  private timeSlept: Number;

  constructor(public navController: NavController, private sleepService: SleepService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.timeSlept = this.route.snapshot.params.timeSlept;
  }

  // getTimeSlept()
  // {

  // }

  recommendBedtime()
  {

  }

  leavePage()
  {
    this.navController.back();
  }

}
