

import { generate } from 'shortid';
import { SleepData } from './sleep-data';


export class ScheduleEntry extends SleepData{

    private dayStarts:Date;
    private dayEnds:Date;
    
    constructor(dayStarts:Date, dayEnds:Date, id:string = generate())
    {
        super();
        this.dayStarts = dayStarts;
		this.dayEnds = dayEnds;
		this.id = id;
        this.type = "Schedule Data";
    }

    

}
