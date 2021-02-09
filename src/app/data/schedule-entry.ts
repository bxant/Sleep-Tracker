import { generate } from 'shortid';
import { SleepData } from './sleep-data';

export class ScheduleData extends SleepData {
	private scheduleStart:Date;
	private scheduleEnd:Date;
    private scheduleDay:string;
    
	constructor(scheduleDay:string, scheduleStart:Date, scheduleEnd:Date, id:string = generate()) {
        super();
        this.scheduleDay = scheduleDay;
		this.scheduleStart = scheduleStart;
		this.scheduleEnd = scheduleEnd;
		this.id = id;
	}

    
    /*
	summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;
		    
		// Convert to hours and minutes
		return "Time Slept: " + Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes";
	}

	dateString():string {
		return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
	}

	typeString():string {
		return "Overnight Data";
    }
    */
}
