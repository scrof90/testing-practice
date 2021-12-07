import reverseString from '../src/reverse-string';

describe('reverseString()', () => {
  test('Empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('One letter', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('Palindrome', () => {
    expect(reverseString('deified')).toBe('deified');
  });

  test('Normal word', () => {
    expect(reverseString('goblin')).toBe('nilbog');
  });

  test('Normal sentence', () => {
    const string = 'The quick brown fox jumps over the lazy dog';
    expect(reverseString(string)).toBe(
      'god yzal eht revo spmuj xof nworb kciuq ehT',
    );
  });
});
