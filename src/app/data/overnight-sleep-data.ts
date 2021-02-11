import { generate } from 'shortid';
import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	private sleepStart:Date;
	private sleepEnd:Date;

	constructor(sleepStart:Date, sleepEnd:Date, id:string = generate()) {
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
		this.id = id;
	}

	// Returns time slept in minutes
	sleepTime():number {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();
		return (sleepEnd_ms - sleepStart_ms) / (1000 * 60);
	}

	summaryString():string {
		return "Time Slept: " + Math.floor(this.sleepTime() / 60) + " hours, " + Math.floor(this.sleepTime() % 60) + " minutes";
	}

	dateString():string {
		return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
	}

	typeString():string {
		return "Overnight Data";
	}
}
