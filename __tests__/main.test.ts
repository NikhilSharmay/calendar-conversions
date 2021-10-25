import { DateType } from '../src/constants';
import dateToJDN from './../src/julianConvert';
describe('JulianConvert', () => {
  // Assert if setTimeout was called properly
  it('should return JDN with default parameters', () => {
    expect(dateToJDN()).toBeGreaterThanOrEqual(2459513);
  });
  it('should return JDN with given date', () => {
    expect(dateToJDN(new Date(1672, 0, 1))).toBe(2331746);
  });
  it('should return JDN with given date and type', () => {
    expect(dateToJDN(new Date(1200, 0, 1), DateType.JULIAN)).toBe(2159358);
  });
});
