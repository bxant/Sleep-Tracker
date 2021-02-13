import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = false;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

  constructor(private storage: Storage) {
  	if(SleepService.LoadDefaultData) {
      this.addDefaultData();
  		SleepService.LoadDefaultData = false;
  	}
  }

  private addDefaultData() {
    this.logOvernightData(new OvernightSleepData(new Date('November 17, 2019 01:03:00'), new Date('November 17, 2019 09:25:00')));
    this.logSleepinessData(new StanfordSleepinessData(4, new Date('November 17, 2019 14:38:00')));
    this.logOvernightData(new OvernightSleepData(new Date('November 18, 2019 23:11:00'), new Date('November 19, 2019 08:03:00')));
  }

  public logOvernightData(sleepData:OvernightSleepData) {
    SleepService.AllSleepData.push(sleepData);
    SleepService.AllOvernightData.push(sleepData);
  }

  public logSleepinessData(sleepData:StanfordSleepinessData) {
  	SleepService.AllSleepData.push(sleepData);
  	SleepService.AllSleepinessData.push(sleepData);
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
      if (value.loggedValue == undefined)
      {
        all_values.push(new OvernightSleepData(value.sleepStart, value.sleepEnd, value.id));
      }
      else
      {
        all_values.push(new StanfordSleepinessData(value.loggedValue, value.loggedAt, value.id));
      }
    });
    return all_values;
  }

  public clearStorage() {
    this.storage.clear();
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
