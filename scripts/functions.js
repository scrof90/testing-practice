const capitalize = (string) => {
  const trimmed = string.trim();
  const firstLetter = trimmed.slice(0, 1).toUpperCase();
  const theRest = trimmed.slice(1);
  return firstLetter + theRest;
};

const reverseString = (string) => string.split('').reverse().join('');

export { capitalize, reverseString };
