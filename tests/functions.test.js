import { capitalize, reverseString } from '../scripts/functions';

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
