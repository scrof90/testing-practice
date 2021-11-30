import { capitalize, reverseString, Calculator } from './functions';

describe('capitalize()', () => {
  test('empty string', () => {
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

describe('reverseString()', () => {
  test('empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('one letter', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('palindrome', () => {
    expect(reverseString('deified')).toBe('deified');
  });

  test('normal word', () => {
    expect(reverseString('goblin')).toBe('nilbog');
  });

  test('normal sentence', () => {
    const string = 'The quick brown fox jumps over the lazy dog';
    expect(reverseString(string)).toBe(
      'god yzal eht revo spmuj xof nworb kciuq ehT',
    );
  });
});

describe('Calculator', () => {
  describe('add()', () => {
    test('2 zeroes', () => {
      expect(Calculator.add(0, 0)).toBe(0);
    });

    test('12315 and 986', () => {
      expect(Calculator.add(12315, 986)).toBe(13301);
    });

    test('-88 and 88', () => {
      expect(Calculator.add(-88, 88)).toBe(0);
    });
  });
});
