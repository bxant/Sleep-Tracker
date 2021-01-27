import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';


@Injectable({
  providedIn: 'root'
})
export class LogsleepService {
  
  public static AllSleepData:SleepData[] = [];
  public static AllOvernightData:OvernightSleepData[] = [];


  public logOvernightData(sleepData:OvernightSleepData) {
  	LogsleepService.AllSleepData.push(sleepData);
    LogsleepService.AllOvernightData.push(sleepData);
    

  }

  public getOvernightData()
  {
    
  }

}
