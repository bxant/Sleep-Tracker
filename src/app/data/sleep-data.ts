import { generate } from 'shortid';


export class SleepData {
	id:string;
	loggedAt:Date;
	type:string;

	constructor() {
		this.loggedAt = new Date();
	}

	summaryString():string {
		return 'Unknown sleep data';
	}

	dateString():string {
		return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}

	typeString():string {
		return "Sleep Data";
	}

	getId():string {
		return this.id;
	}
}
