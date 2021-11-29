import capitalize from './functions';

describe('capitalize()', () => {
  test('empty sentence', () => {
    expect(capitalize('')).toBe('');
  });

  test('already capitalized', () => {
    const string = 'The quick brown fox jumps over the lazy dog';
    expect(capitalize(string)).toBe(string);
  });

  test('only lower case', () => {
    const string = 'the quick brown fox jumps over the lazy dog';
    expect(capitalize(string)).toBe(
      'The quick brown fox jumps over the lazy dog',
    );
  });

  test('only upper case', () => {
    const string = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';
    expect(capitalize(string)).toBe(
      'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG',
    );
  });

  test('starts with whitespace', () => {
    const string = '    the quick brown fox jumps over the lazy dog';
    expect(capitalize(string)).toBe(
      'The quick brown fox jumps over the lazy dog',
    );
  });

  test('numbers', () => {
    expect(capitalize('1234567890')).toBe('1234567890');
  });
});
