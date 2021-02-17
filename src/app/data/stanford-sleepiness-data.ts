/* from the Stanford Sleepiness Scale */
/* https://web.stanford.edu/~dement/sss.html */

import { generate } from 'shortid';
import { SleepData } from './sleep-data';

export class StanfordSleepinessData extends SleepData {
	public static ScaleValues = [undefined,//Sleepiness scale starts at 1
	'Feeling active, vital, alert, or wide awake', //1
	'Functioning at high levels, but not at peak; able to concentrate', //2
	'Awake, but relaxed; responsive but not fully alert', //3
	'Somewhat foggy, let down', //4
	'Foggy; losing interest in remaining awake; slowed down', //5
	'Sleepy, woozy, fighting sleep; prefer to lie down', //6
	'No longer fighting sleep, sleep onset soon; having dream-like thoughts']; //7

	private loggedValue:number;

	constructor(loggedValue:number, loggedAt:Date = new Date(), id:string = generate()) {
		super();
		this.loggedValue = loggedValue;
		this.loggedAt = loggedAt;
		this.id = id;
		this.type = "Alertness Data";
	}

	summaryString():string {
		return "At " + this.loggedAt.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}) +
		" you felt: " + this.loggedValue + " - " + StanfordSleepinessData.ScaleValues[this.loggedValue];
	}

	dateString():string {
		return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
	}

	typeString():string {
		return "Alertness Data";
	}
}
