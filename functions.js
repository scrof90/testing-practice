const capitalize = (string) => {
  const trimmed = string.trim();
  const firstLetter = trimmed.slice(0, 1).toUpperCase();
  const theRest = trimmed.slice(1);
  return firstLetter + theRest;
};

const reverseString = (string) => string.split('').reverse().join('');

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static divide(a, b) {
    return a / b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

export { capitalize, reverseString, Calculator };
