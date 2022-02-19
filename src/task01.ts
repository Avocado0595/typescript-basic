const spacecraftName: string = 'Determination';
const speedMph: number = 17500;
const kilometersToMars: number = 225000000;
const kilometersToTheMoon: number = 384400;
const milesPerkilometer: number = 0.621;

const main:Function = ()=>{
    //days to Mars by normal way
let mileToMars: number = kilometersToMars * milesPerkilometer;
let hoursToMars: number = mileToMars / speedMph;
let daysToMars: number = hoursToMars / 24;
console.log(
	`Our ${spacecraftName} will take ${daysToMars} days to go to Mars. Awesome! =))`
);

//create function to calc day to a location
function getDaysToLocation(kilometAway: number): number {
	let milesAway: number = kilometAway * milesPerkilometer;
	let hoursToLocation: number = milesAway / speedMph;
	let daysToLocation: number = hoursToLocation / 24;
	return Math.round(daysToLocation * 100) / 100;
}
//use function to calc how many days to Mars
console.log(
	`Our ${spacecraftName} will take ${getDaysToLocation(
		kilometersToMars
	)} days to go to Mars. Awesome! =))`
);
//use function to calc how many days to the Moon
console.log(
	`Our ${spacecraftName} will take ${getDaysToLocation(
		kilometersToTheMoon
	)} days to go to The Moon. Awesome! =)).\nAnyway, you can call Bruno Mars to take you to the Moon. @@`
);
}

export default main;