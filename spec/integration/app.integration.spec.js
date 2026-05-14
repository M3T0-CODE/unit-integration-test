const { add, divide } = require('../../src/calculator');

describe('Calculator - Integration Tests', () => {

  it('should correctly chain add and divide operations', () => {
    const sum = add(10, 10);      // 20
    const result = divide(sum, 4); // 5
    expect(result).toBe(5);
  });

  it('should handle a full calculation workflow', () => {
    const a = add(5, 5);    // 10
    const b = add(3, 7);    // 10
    const total = add(a, b); // 20
    expect(divide(total, 2)).toBe(10);
  });

});