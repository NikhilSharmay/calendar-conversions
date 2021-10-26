import { DateType } from './constants';

/**
 * Convert date to julian day number(JDN)
 * JDN is breifly number of days since 1,jan,4713 BC
 * Calculation as described in http://www.cs.utsa.edu/~cs1063/projects/Spring2011/Project1/jdn-explanation.html
 * also look into https://squarewidget.com/2019/02/
 * @param {Date} date
 * @param {import { DateType } from "./constants";} dateType
 * @returns {number} jdn (Julian Day Number)
 */
function getJDN(
  date: Date = new Date(),
  dateType: DateType = DateType.GREG,
): number {
  let [gYear, gMonth] = [
    date.getFullYear(),
    date.getMonth() + 1,
  ];
  const gDay = date.getDate();
  //if month is january or february, make it 13 and 14th month of previous year
  if (gMonth == 1 || gMonth == 2) {
    gYear -= 1;
    gMonth += 12;
  }
  let extraLeapDays: number;
  //converting into julian calendar, just to make calculations easier
  switch (dateType) {
    case DateType.GREG:
      //extraleapdays which are added every 400 years and neglected every 100 years to make 365.2425 rather than 365.25
      extraLeapDays = 2 - Math.floor(gYear / 100) + Math.floor(Math.floor(gYear / 100) / 4);
      break;
    case DateType.JULIAN:
      extraLeapDays = 0;
  }
  // formula from meeus astronomical algorithms
  const jdn =
    365.25 * (gYear + 4716) +
    30.6001 * (gMonth + 1) +
    (gDay + extraLeapDays - 1524.5);
  return jdn;
}
export default getJDN;