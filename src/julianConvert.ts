import { DateType } from './constants';

function dateToJDN(
  greg: Date = new Date(),
  dateType: DateType = DateType.GREG,
): number {
  const [gYear, gMonth, gDay] = [
    greg.getFullYear(),
    greg.getMonth() + 1,
    greg.getDate(),
  ];
  let tempMonth: number, totalYears: number, offsetDays: number;
  tempMonth = Math.floor((14 - gMonth) / 12);
  const tempYear = gYear + 4800 - tempMonth;
  tempMonth = gMonth + 12 * tempMonth - 3;
  const totalDays = Math.floor((153 * tempMonth + 2) / 5);
  switch (dateType) {
    case DateType.GREG:
      totalYears =
        Math.floor(tempYear / 4) -
        Math.floor(tempYear / 100) +
        Math.floor(tempYear / 400);
      offsetDays = 32045;
      break;
    case DateType.JULIAN:
      totalYears = Math.floor(tempYear / 4);
      offsetDays = 32083;
  }
  const jdn = gDay + totalDays + 365 * tempYear + totalYears - offsetDays;
  return jdn;
}
export default dateToJDN;
