import { generate } from 'shortid';
import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	private sleepStart:Date;
	private sleepEnd:Date;
	private hoursSlept:number;

	constructor(sleepStart:Date, sleepEnd:Date, id:string = generate()) {
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
		this.id = id;
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;

		this.hoursSlept = Math.floor(difference_ms / ( 1000*60*60));
	}

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
}
