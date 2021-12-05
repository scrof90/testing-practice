const caesarCipher = (string) => {
  // character codes for edge cases
  const charCodes = {
    upperA: 65,
    upperZ: 90,
    lowerZ: 122,
  };

  return string
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (charCode < charCodes.upperA || charCode > charCodes.lowerZ) {
        return char;
      }
      if (charCode === charCodes.lowerZ || charCode === charCodes.upperZ) {
        return String.fromCharCode(charCode - 25);
      }
      return String.fromCharCode(charCode + 1);
    })
    .join('');
};

export default caesarCipher;
