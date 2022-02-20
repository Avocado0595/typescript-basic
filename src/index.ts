import { Spacecraft, TravelToUniverse } from './task02';

let sp1: Spacecraft = new Spacecraft('Determination', 17500);
let toMars: TravelToUniverse = new TravelToUniverse('Mars', 225000000, sp1);
let toMoon: TravelToUniverse = new TravelToUniverse('The Moon', 384400, sp1);
toMars.getDaysToGo();
toMoon.getDaysToGo();
