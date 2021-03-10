import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/Angular';
import { SleepService } from '../services/sleep.service';
import { ActivatedRoute } from "@angular/router";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-daily-brief',
  templateUrl: './daily-brief.page.html',
  styleUrls: ['./daily-brief.page.scss'],
})
export class DailyBriefPage implements OnInit {
  private timeSlept: Number;
  private hasSleepDebt: boolean;
  private bedTime: String;

  constructor(public navController: NavController, private sleepService: SleepService,
    private route: ActivatedRoute, private storage: Storage) { }

  ngOnInit() {
    this.timeSlept = this.route.snapshot.params.timeSlept;

    this.hasSleepDebt = this.sleepService.getSleepDebt() > 0;

    var wakeGoal;
    this.getWakeGoal().then((data)=>
    {
      wakeGoal = new Date(data);
      var neededSleep = 8;
      if (this.hasSleepDebt)
        neededSleep++;

      console.log(typeof(wakeGoal));

      var bedtimeHour = (wakeGoal.getHours() - neededSleep);
      if (bedtimeHour < 0)
        bedtimeHour = 12 + bedtimeHour;
      this.bedTime = bedtimeHour + ":" + wakeGoal.getMinutes();
      console.log(this.bedTime);
    });
  }

  getWakeGoal(): Promise<any> {
    return this.storage.get("preferredWakeUp");
  }

  sleepString()
  {
    if (this.timeSlept < 8)
    {
      return "You are a little behind on sleep.";
    }
    else{
      return "You are doing well with getting enough sleep.";
    }
  }

  leavePage()
  {
    this.navController.back();
  }

}
