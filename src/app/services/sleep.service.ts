import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

import { Storage } from '@ionic/storage';
import { ScheduleData } from '../data/schedule-entry';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = false;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
  public static AllSleepinessData:StanfordSleepinessData[] = [];
  public static AllScheduleData:ScheduleData[] = [];

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

  public logScheduleData(sleepData:ScheduleData) {
  	SleepService.AllSleepData.push(sleepData);
  	SleepService.AllScheduleData.push(sleepData);
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
        all_values.push(new ScheduleData(value.scheduleDay, value.scheduleStart, value.scheduleEnd, value.id));
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
}
