import caesarCipher from '../scripts/caesar-cipher';

describe('caesarCipher()', () => {
  describe('One character strings:', () => {
    test('"a" should become "b"', () => {
      expect(caesarCipher('a')).toBe('b');
    });

    test('"B" should become "C"', () => {
      expect(caesarCipher('B')).toBe('C');
    });

    test('edge case: "z" should wrap to "a"', () => {
      expect(caesarCipher('z')).toBe('a');
    });

    test('edge case: "Z" should wrap to "A"', () => {
      expect(caesarCipher('Z')).toBe('A');
    });
  });
});
