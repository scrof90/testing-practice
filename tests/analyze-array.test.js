import analyzeArray from '../src/analyze-array';

describe('analyzeArray()', () => {
  it('should return an object', () => {
    expect(typeof analyzeArray([])).toBe('object');
  });

  test('case 0: [0]', () => {
    expect(analyzeArray([0])).toStrictEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 1,
    });
  });

  describe('case 1: [1, 2, 3, 4, 5]', () => {
    const arr = [1, 2, 3, 4, 5];

    it('should determine an average', () => {
      expect(analyzeArray(arr).average).toBe(3);
    });

    it('should determine a minimum', () => {
      expect(analyzeArray(arr).min).toBe(1);
    });

    it('should determine a maximum', () => {
      expect(analyzeArray(arr).max).toBe(5);
    });

    it('should determine length', () => {
      expect(analyzeArray(arr).length).toBe(5);
    });

    it('should analyze fully', () => {
      expect(analyzeArray(arr)).toStrictEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
      });
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
});
