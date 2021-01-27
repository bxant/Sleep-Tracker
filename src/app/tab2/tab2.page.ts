// LOG HISTORY FOR SLEEP/MEDITATION/NAPS

import { Component } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';


// this import is where data is saved into ionic storage
import { LogsleepService } from '../services/logsleep.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  selectedMonths = [];
  monthsSelected = [];

  public jan:boolean = false;
  feb:boolean = false;
  mar:boolean = false;
  apr:boolean = false;
  may:boolean = false;
  jun:boolean = false;
  jul:boolean = false;
  aug:boolean = false;
  sep:boolean = false;
  oct:boolean = false;
  nov:boolean = false;
  dec:boolean = false;

  constructor(public data: LogsleepService) {
    console.log(data.getOvernightData());
    console.log(this.jan);
  }

  ngOnInit()
  {

  }

  public selectTrue(date:boolean)
  {
    date = true;
    console.log("selected true entered");  
  }

  public filteredMonths()
  {
    console.log("entered function");
    console.log(this.selectedMonths);
    var monthsDictionary = 
    {
      "jan": this.jan,
      feb: this.feb,
      mar: this.mar,
      apr: this.apr,
      may: this.may,
      jun: this.jun,
      jul: this.jul,
      aug: this.aug,
      sep: this.sep,
      oct: this.oct,
      nov: this.nov,
      dec: this.dec
    }
    console.log(this.jan);
    if (monthsDictionary["jan"] == true)
    {
      this.monthsSelected.push("january added");      
    }
    console.log(this.monthsSelected);
    
  }

  


  // tagsSelected = []
  // for (var i = 0; i < tagsSelected.length; i++)
  // {
  //   tagsSelected.push(tagsSe)
  // }

  // TODO: Need to bind the months to array that can be used
  // to filter through our sleep data.
  // Need to also bind days to array to use for filtering of data.

  //TODO: need to be able to also bind both days and months to our information.
  // probably use a boolean value to ensure that our days are
  // actually "filterable" <-- not sure if that's a word
  // but I hope you get the idea.

}
