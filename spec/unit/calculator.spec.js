const { add, divide } = require('../../src/calculator');

describe('Calculator - Unit Tests', () => {

  beforeAll(() => {
    console.log('--- Unit Tests Started ---');
  });

  afterAll(() => {
    console.log('--- Unit Tests Finished ---');
  });

  beforeEach(() => {
    console.log('Running a test...');
  });

  afterEach(() => {
    console.log('Test done.');
  });

  describe('add()', () => {
    it('should return the sum of two numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should handle negative numbers', () => {
      expect(add(-1, -2)).toBe(-3);
    });
  });

  describe('divide()', () => {
    it('should divide two numbers correctly', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrowError('Cannot divide by zero');
    });
  });

});