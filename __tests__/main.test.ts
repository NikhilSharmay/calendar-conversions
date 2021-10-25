import { DateType } from '../src/constants';
import dateToJDN from './../src/julianConvert';
describe('JulianConvert', () => {
  // const name = 'John';
  // let hello: string;

  // let timeoutSpy: jest.SpyInstance;

  // // Act before assertions
  // beforeAll(async () => {
  //   // Read more about fake timers
  //   // http://facebook.github.io/jest/docs/en/timer-mocks.html#content
  //   // Jest 27 now uses "modern" implementation of fake timers
  //   // https://jestjs.io/blog/2021/05/25/jest-27#flipping-defaults
  //   // https://github.com/facebook/jest/pull/5171
  //   jest.useFakeTimers();
  //   timeoutSpy = jest.spyOn(global, 'setTimeout');

  //   const p: Promise<string> = greeter(name);
  //   jest.runOnlyPendingTimers();
  //   hello = await p;
  // });

  // // Teardown (cleanup) after assertions
  // afterAll(() => {
  //   timeoutSpy.mockRestore();
  // });
  beforeAll(async()=>{

  })
  afterAll(()=>{

  })

  // Assert if setTimeout was called properly
  it('should return JDN with default parameters', () => {
    expect(dateToJDN()).toBeGreaterThanOrEqual(2459513);
  });
  it('should return JDN with given date',()=>{
    expect(dateToJDN(new Date(1672,0,1))).toBe(2331746)
  })
  it('should return JDN with given date and type',()=>{
    expect(dateToJDN(new Date(1200,0,1),DateType.JULIAN)).toBe(2159358);
  })
});
