import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

// import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

  constructor(
    private allSleepinessDataStorage:Storage,
    private allOvernightSleepDataStorage:Storage
  ) {
  	// if(SleepService.LoadDefaultData) {
    //   this.addDefaultData();
  	// 	SleepService.LoadDefaultData = false;
  	// }
  }

  private addDefaultData() {
    this.logOvernightData(new OvernightSleepData(new Date('November 17, 2019 01:03:00'), new Date('November 17, 2019 09:25:00')));
    this.logSleepinessData(new StanfordSleepinessData(4, new Date('November 17, 2019 14:38:00')));
    this.logOvernightData(new OvernightSleepData(new Date('November 18, 2019 23:11:00'), new Date('November 18, 2019 08:03:00')));
  }

  public logOvernightData(sleepData:OvernightSleepData) {
  	SleepService.AllSleepData.push(sleepData);
    SleepService.AllOvernightData.push(sleepData);
    

  }

  public logSleepinessData(sleepData:StanfordSleepinessData) {
  	SleepService.AllSleepData.push(sleepData);
    SleepService.AllSleepinessData.push(sleepData);
    
  }

  public getAllOvernightStorage()
  {
    SleepService.AllOvernightData.forEach((key) =>
    {
      this.allOvernightSleepDataStorage.get(key.id).then((value)=>{
        // console.log(value);
      });
    });
  }

  public getAllSleepinessStorage()
  {
    SleepService.AllSleepinessData.forEach((key) =>
    {
      this.allSleepinessDataStorage.get(key.id).then((value)=>{
        // console.log(value);
      });
    });
  }
}
