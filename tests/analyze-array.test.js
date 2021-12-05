import analyzeArray from '../scripts/analyze-array';

describe('analyzeArray()', () => {
  test('placeholder', () => {
    expect(true).toBe(true);
  });

  it('should return an object', () => {
    expect(typeof analyzeArray([])).toBe('object');
  });

  test('case 1: [1, 2, 3, 4, 5]', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  test('case 2: [7, 900, 24]', () => {
    expect(analyzeArray([7, 900, 24])).toStrictEqual({
      average: 310.33,
      min: 7,
      max: 900,
      length: 3,
    });
  });

  test('case 3: [-235, 0, 77, 2]', () => {
    expect(analyzeArray([-235, 0, 77, 2])).toStrictEqual({
      average: -39,
      min: -235,
      max: 77,
      length: 4,
    });
  });
});
