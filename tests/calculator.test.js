import Calculator from '../src/calculator';

describe('Calculator', () => {
  describe('add()', () => {
    test('Two positive numbers', () => {
      expect(Calculator.add(12315, 986)).toBe(13301);
    });

    test('Two negative numbers', () => {
      expect(Calculator.add(-100, -32)).toBe(-132);
    });

    test('Same number with different signs', () => {
      expect(Calculator.add(-88, 88)).toBe(0);
    });
  });

  describe('subtract()', () => {
    test('Two positive numbers', () => {
      expect(Calculator.subtract(12315, 986)).toBe(11329);
    });

    test('Two negative numbers', () => {
      expect(Calculator.subtract(-100, -32)).toBe(-68);
    });

    test('Same number with different signs', () => {
      expect(Calculator.subtract(-88, 88)).toBe(-176);
    });
  });

  describe('Divide()', () => {
    test('by 1', () => {
      expect(Calculator.divide(8, 1)).toBe(8);
    });

    test('By 0', () => {
      expect(Calculator.divide(1, 0)).toBe(Infinity);
    });

    test('Two positive numbers', () => {
      expect(Calculator.divide(12315, 986)).toBeCloseTo(12.485);
    });

    test('Two negative numbers', () => {
      expect(Calculator.divide(-100, -32)).toBeCloseTo(3.125);
    });

    test('Same number', () => {
      expect(Calculator.divide(88, 88)).toBe(1);
    });
  });

  describe('multiply()', () => {
    test('By 1', () => {
      expect(Calculator.multiply(256, 1)).toBe(256);
    });

    test('By 0', () => {
      expect(Calculator.multiply(1, 0)).toBe(0);
    });

    test('Two positive numbers', () => {
      expect(Calculator.multiply(12315, 986)).toBe(12142590);
    });

    test('Two negative numbers', () => {
      expect(Calculator.multiply(-100, -32)).toBe(3200);
    });

    test('Different signs', () => {
      expect(Calculator.multiply(-88, 88)).toBeLessThan(0);
    });
  });
});
