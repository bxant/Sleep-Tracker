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

  }

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

  public getAlertData()
  {
    var alertStorage = [];
    this.storage.forEach((value, key, index) => {
      if (value.type == "Alertness Data")
      {
        alertStorage.push(new StanfordSleepinessData(value.loggedValue, value.loggedAt, value.id));
      }
    });
    return alertStorage;
  }

  async clearStorage() {    
    const all_values = this.getAllValues();
    setTimeout(() => {
      console.log(JSON.stringify(all_values));
      for (var data of all_values)
      {
        this.deleteFromStorage(data.id);
      }
    }, 2000);
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
