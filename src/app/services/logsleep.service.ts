import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

import { Storage } from '@ionic/storage';



@Injectable({
  providedIn: 'root'
})
export class LogsleepService {
  
  public static AllSleepData:SleepData[] = [];
  public static AllOvernightData:OvernightSleepData[] = [];

  constructor(public storage: Storage){}

  public logOvernightData(sleepData:OvernightSleepData) {
  	LogsleepService.AllSleepData.push(sleepData);
    LogsleepService.AllOvernightData.push(sleepData);
    this.storage.set("overnightSleep", LogsleepService.AllSleepData);
    

  }

  public getOvernightData()
  {
    this.storage.get("overnightSleep").then((val)=>{
      console.log(val);
    }); 
  }

  // public set(settingName,value){
  //   return this.storage.set("overnightSlep",value);
  // }
  // public async get(settingName){
  //   return await this.storage.get(`setting:${ settingName }`);
  // }
}
