import caesarCipher from '../src/caesar-cipher';

describe('caesarCipher()', () => {
  test('Empty string should return empty string', () => {
    expect(caesarCipher('')).toBe('');
  });

  describe('One character strings:', () => {
    test('"a" should return "b"', () => {
      expect(caesarCipher('a')).toBe('b');
    });

    test('"B" should return "C"', () => {
      expect(caesarCipher('B')).toBe('C');
    });

    test('"z" should wrap to "a"', () => {
      expect(caesarCipher('z')).toBe('a');
    });

    test('"Z" should wrap to "A"', () => {
      expect(caesarCipher('Z')).toBe('A');
    });
  });

  describe('One-word strings:', () => {
    test('"word" should return "xpse"', () => {
      expect(caesarCipher('word')).toBe('xpse');
    });

    test('"Zombie" should return "Apncjf"', () => {
      expect(caesarCipher('Zombie')).toBe('Apncjf');
    });
  });

  describe('Sentences:', () => {
    it('Should handle whole sentences', () => {
      const sentence = 'The quick brown fox jumps over the lazy dog';
      const encryptedSentence = 'Uif rvjdl cspxo gpy kvnqt pwfs uif mbaz eph';
      expect(caesarCipher(sentence)).toBe(encryptedSentence);
    });

    it('Should handle punctuation', () => {
      const sentence =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
      const encryptedSentence =
        'Mpsfn jqtvn epmps tju bnfu, dpotfdufuvs bejqjtdjoh fmju, tfe ep fjvtnpe ufnqps jodjejevou vu mbcpsf fu epmpsf nbhob bmjrvb.';
      expect(caesarCipher(sentence)).toBe(encryptedSentence);
    });
  });
});
