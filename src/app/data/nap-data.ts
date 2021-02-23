import { SleepData } from "./sleep-data";
import { generate } from 'shortid';
import { StanfordSleepinessData } from "./stanford-sleepiness-data";

export class NapData{
    private loggedValue:number;
    private loggedAt:Date;
    private napDuration:number;
    constructor(loggedValue:number, loggedAt:Date = new Date(), id:string = generate())
    {
        
        this.loggedValue = loggedValue;
        this.loggedAt = loggedAt;
        this.napDuration = 0;
		this.determineMeditationLengths();
        
    }

    meditationString()
	{
		return "nap of duration: " + this.napDuration	+ " minutes";
	}

    determineMeditationLengths()
	{
		if (this.loggedValue == 6)
		{
			this.napDuration = 30;
		}
		else if (this.loggedValue == 7)
		{
			this.napDuration = 60;
		}
	}

    dateString():string {
		return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
	}

	typeString():string{
		return "Nap Data";
	}

    cardString():string{
        return "Nap";
    }
}
