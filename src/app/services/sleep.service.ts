import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

import { Storage } from '@ionic/storage';

// New types of data for our user interface
import { ScheduleEntry } from '../data/schedule-entry';
import { MeditationData } from '../data/meditation-data';
import { NapData } from '../data/nap-data';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = false;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

  // New data types added
  public static AllScheduleData:ScheduleEntry[] = [];
  public static AllMeditationData:MeditationData[] = [];
  public static AllNapData:NapData[] = [];

  constructor(private storage: Storage) {
  	// if(SleepService.LoadDefaultData) {
    //   this.addDefaultData();
  	// 	SleepService.LoadDefaultData = false;
  	// }
  }

  // private addDefaultData() {
  //   this.logOvernightData(new OvernightSleepData(new Date('November 17, 2019 01:03:00'), new Date('November 17, 2019 09:25:00')));
  //   this.logSleepinessData(new StanfordSleepinessData(4, new Date('November 17, 2019 14:38:00')));
  //   this.logOvernightData(new OvernightSleepData(new Date('November 18, 2019 23:11:00'), new Date('November 19, 2019 08:03:00')));
  // }

  // public logOvernightData(sleepData:OvernightSleepData) {
  //   SleepService.AllSleepData.push(sleepData);
  //   SleepService.AllOvernightData.push(sleepData);
  // }

  // public logSleepinessData(sleepData:StanfordSleepinessData) {
  // 	SleepService.AllSleepData.push(sleepData);
  // 	SleepService.AllSleepinessData.push(sleepData);
  // }

  // public logScheduleData(sleepData:ScheduleEntry)
  // {
  //   SleepService.AllSleepData.push(sleepData);
  //   SleepService.AllScheduleData.push(sleepData);

  // }

  // public logMeditationData(sleepData:MeditationData)
  // {
  //   SleepService.AllSleepData.push(sleepData);

  //   // this is subject to change since this is not necessarily sleep
  //   // data but we'll see
  //   SleepService.AllMeditationData.push(sleepData);
  // }

  // public logNapData(sleepData:NapData)
  // {
  //   SleepService.AllSleepData.push(sleepData);
  //   SleepService.AllNapData.push(sleepData);
  // }

  public addToStorage(sleepData:SleepData) {
    this.storage.set(sleepData.id, sleepData);
  }

  public deleteFromStorage(id:string) {
    this.storage.remove(id);
  }

  public getAllValues() {
    var all_values = [];

    this.storage.forEach((value, key, index) => {
      if (value.type == "Overnight Sleep Data")
      {
        all_values.push(new OvernightSleepData(value.sleepStart, value.sleepEnd, value.id));
      }
      else if (value.type == "Alertness Data")
      {
        all_values.push(new StanfordSleepinessData(value.loggedValue, value.loggedAt, value.id));
      }
    });
    return all_values;
  }

  async clearStorage() {    
    // Promise.resolve(this.getAllValues()).then((all_values) => {
    //   console.log(all_values);
    //   console.log(JSON.stringify(all_values));
    //   for (var data of all_values)
    //   {
    //     this.deleteFromStorage(data.getId());
    //   }
    // })
    
    const all_values = this.getAllValues();
    setTimeout(() => {
      console.log(JSON.stringify(all_values));
      for (var data of all_values)
      {
        this.deleteFromStorage(data.id);
      }
    }, 2000);
    // console.log(all_values);
    // for (var data of all_values)
    // {
    //   this.deleteFromStorage(data.getId());
    // }
    // console.log(all_values);
  }

  // ASSUMES 8 HOURS OF SLEEP PER NIGHT
  // CHNAGE WHEN PERSONALIZATION IS IMPLEMENTED
  public getSleepDebt() {
    var all_values = this.getAllValues();

    var sleepDebt = 0;
    var today = new Date();
    for (var value of all_values)
    {
      // I think that time is two weeks in ms
      if (today.getTime() - value.sleepEnd.getTime() < 1209600000)
        sleepDebt += Math.max(0, 8 - value.sleepTime())
    }
    return sleepDebt;
  }
}
