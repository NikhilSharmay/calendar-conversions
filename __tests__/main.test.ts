import { DateType, MoonPhases } from '../src/constants';
import dateToJDN from './../src/julianConvert';
import {getLunarDay, getLunarDayWeekly, getLunarPhase,getLunarPhaseWeekly} from './../src/moonPhase';
describe('JulianConvert', () => {
  // Assert if setTimeout was called properly
  it('should return JDN with default parameters', () => {
    expect(dateToJDN()).toBeGreaterThanOrEqual(2459513);
  });
  it('should return JDN with given date', () => {
    expect(dateToJDN(new Date(1672, 0, 1))).toBe(2331746.6514);
  });
  it('should return JDN with given date and type', () => {
    expect(dateToJDN(new Date(1200, 0, 1), DateType.JULIAN)).toBe(2159358.6514);
  });
  it('should return moon day of current day',()=>{
    const phase = getLunarDay(new Date());
    expect(phase).toBe(20);
  })
  it('should return weekly moon days of current day',()=>{
    const phases = getLunarDayWeekly(new Date());
    expect(phases).toStrictEqual([20,21,22,23,24,25,26]);
  })
  it('should return moon phase of current day',()=>{
    const phase = getLunarPhase(new Date(2021,9,20));
    expect(phase).toBe(MoonPhases.FULLMOON);
  })
  it('should return weekly moon phase of current day',()=>{
    const phases = getLunarPhaseWeekly(new Date());
    expect(phases).toStrictEqual([5,5,6,7,7,7,7]);
  })
  
});
