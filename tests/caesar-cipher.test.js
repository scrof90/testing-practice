import caesarCipher from '../scripts/caesar-cipher';

describe('caesarCipher()', () => {
  describe('One character strings:', () => {
    test('"a" should become "b"', () => {
      expect(caesarCipher('a')).toBe('b');
    });

    test('"A" should become "B"', () => {
      expect(caesarCipher('A')).toBe('B');
    });

    test('edge case: "z" should wrap to "a"', () => {
      expect(caesarCipher('z')).toBe('a');
    });
  });
});
