import { MoonPhases } from './constants';
import getJDN from './julianConvert';
function getLunarDay(date: Date = new Date()): number {
  //0.5 is added for time precision, julian day started on new moon day 1 jan -4712
  const daysSinceNewMoon = getJDN(date) + 0.5;
  const numberOfNewMoons = daysSinceNewMoon / 29.53;
  const currentMoonFraction = '0.' + numberOfNewMoons.toString().split('.')[1];
  const daysSinceCurrentNewMoon = parseFloat(currentMoonFraction) * 29.53;
  return Math.floor(daysSinceCurrentNewMoon);
}

function getLunarDaysWeekly(date: Date, numberOfWeeks = 1): Array<number> {
  const day = getLunarDay(date);
  const days: Array<number> = [day];
  for (let i = 1; i < 7 * numberOfWeeks; i++) {
    days[i] = (days[i - 1] + 1) % 30;
  }
  return days;
}

function getLunarPhase(date: Date = new Date()): MoonPhases {
  const moonDay = getLunarDay(date);
  if (moonDay > 0 && moonDay < 6) {
    return MoonPhases.WAXCRES;
  }
  if (moonDay == 6) {
    return MoonPhases.FIRSTQUARTER;
  }
  if (moonDay > 6 && moonDay < 14) {
    return MoonPhases.WAXGIB;
  }
  if (moonDay === 14) {
    return MoonPhases.FULLMOON;
  }
  if (moonDay > 14 && moonDay < 22) {
    return MoonPhases.WANGIB;
  }
  if (moonDay === 22) {
    return MoonPhases.THIRDQUARTER;
  }
  if (moonDay > 22 && moonDay < 30) {
    return MoonPhases.WANCRES;
  }
  return MoonPhases.NEWMOON;
}

function getLunarPhasesWeekly(date: Date, numberOfWeeks = 1): Array<number> {
  const phases: Array<number>=[];
  for (let i = 0; i < 7 * numberOfWeeks; i++) {
    phases[i] = getLunarPhase(date);
    date.setDate(date.getDate()+1);
  }
  return phases;
}


export { getLunarDay, getLunarDaysWeekly, getLunarPhase, getLunarPhasesWeekly };
