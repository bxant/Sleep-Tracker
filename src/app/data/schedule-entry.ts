

import { generate } from 'shortid';
import { SleepData } from './sleep-data';


export class ScheduleEntry extends SleepData{

    private scheduleStart:Date;
	private scheduleEnd:Date;
    private scheduleDay:string;
    
    constructor(scheduleDay:string, scheduleStart:Date, scheduleEnd:Date, id:string = generate())
    {
        super();
        this.scheduleDay = scheduleDay;
		this.scheduleStart = scheduleStart;
		this.scheduleEnd = scheduleEnd;
		this.id = id;
        this.type = "Schedule Data";
    }

    typeString():string {
		return "Schedule Entry";
	}
    

}
