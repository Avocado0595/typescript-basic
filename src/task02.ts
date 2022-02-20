export class Spacecraft {
	private milesPerKilometer: number = 0.621;
	private _name: string;
	private _speedMph: number;
	constructor(name: string, speedMph: number) {
		this._name = name;
		this._speedMph = speedMph;
	}
	get name(): string {
		return this._name;
	}
	getDaysToLocation(kilometAway: number): number {
		let milesAway: number = kilometAway * this.milesPerKilometer;
		let hoursToLocation: number = milesAway / this._speedMph;
		let daysToLocation: number = hoursToLocation / 24;
		return Math.round(daysToLocation * 100) / 100;
	}
}

export class TravelToUniverse {
	private _planet: string;
	private _kilometersToPlanet: number;
	private _spacecraft: Spacecraft;
	constructor(
		planet: string,
		kilometerToPlanet: number,
		spacecraft: Spacecraft
	) {
		this._planet = planet;
		this._kilometersToPlanet = kilometerToPlanet;
		this._spacecraft = spacecraft;
	}
	getDaysToGo() {
		console.log(
			`Our ${
				this._spacecraft.name
			} will take ${this._spacecraft.getDaysToLocation(
				this._kilometersToPlanet
			)} days to go to the ${this._planet}. Awesome! =)).`
		);
	}
}
