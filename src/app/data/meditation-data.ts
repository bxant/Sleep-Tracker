import { SleepData } from "./sleep-data";
import { generate } from 'shortid';
import { StanfordSleepinessData } from "./stanford-sleepiness-data";


export class MeditationData{

    private loggedValue:number;
    private loggedAt:Date;
    private meditationDuration:number;
    constructor(loggedValue:number, loggedAt:Date = new Date(), id:string = generate())
    {
        
        this.loggedValue = loggedValue;
        this.loggedAt = loggedAt;
        this.meditationDuration = 0;
		this.determineMeditationLengths();
        
    }

    meditationString()
	{
		return "Meditation of duration: " + this.meditationDuration	+ " minutes";
	}

    determineMeditationLengths()
	{
		if (this.loggedValue == 3)
		{
			this.meditationDuration = 10;
		}
		else if (this.loggedValue == 4)
		{
			this.meditationDuration = 15;
		}
		else if (this.loggedValue == 5)
		{
			this.meditationDuration = 20;
		}
	}

    dateString():string {
		return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
	}

	typeString():string{
		return "Meditation Data";
	}

	cardString():string{
		return "Meditation";
	}
}
