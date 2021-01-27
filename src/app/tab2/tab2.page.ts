// LOG HISTORY FOR SLEEP/MEDITATION/NAPS

import { Component } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';

import { LogsleepService } from '../services/logsleep.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public data: LogsleepService) {
    console.log(data.getOvernightData());
  }

  ngOnInit()
  {

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
