import capitalize from '../src/capitalize';

describe('capitalize()', () => {
  test('Empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('Already capitalized', () => {
    const string = 'The quick brown fox jumps over the lazy dog';

    expect(capitalize(string)).toBe(string);
  });

  test('Only lower case', () => {
    const string = 'the quick brown fox jumps over the lazy dog';

    expect(capitalize(string)).toBe(
      'The quick brown fox jumps over the lazy dog',
    );
  });

  test('Only upper case', () => {
    const string = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';

    expect(capitalize(string)).toBe(
      'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG',
    );
  });

  test('Starts with whitespace', () => {
    const string = '    the quick brown fox jumps over the lazy dog';

    expect(capitalize(string)).toBe(
      'The quick brown fox jumps over the lazy dog',
    );
  });

  test('Numbers', () => {
    expect(capitalize('1234567890')).toBe('1234567890');
  });
});
