const caesarCipher = (string) => {
  // map cipher rules to ascii character codes
  const cipher = {
    offsets: {
      normal: 1,
      z: -25,
      symbol: 0,
    },

    // character codes for edge cases
    charCodes: {
      upperA: 65,
      upperZ: 90,
      lowerA: 97,
      lowerZ: 122,
    },
  };

  const encryptedString = string
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt(0);

      // choose the correct character code offset according to case
      let offset;
      if (
        charCode < cipher.charCodes.upperA ||
        charCode > cipher.charCodes.lowerZ
      ) {
        offset = cipher.offsets.symbol;
      } else if (
        charCode === cipher.charCodes.lowerZ ||
        charCode === cipher.charCodes.upperZ
      ) {
        offset = cipher.offsets.z;
      } else {
        offset = cipher.offsets.normal;
      }

      // encrypt the character by applying the offset to its character code
      const encryptedCharCode = charCode + offset;
      return String.fromCharCode(encryptedCharCode);
    })
    .join('');

  return encryptedString;
};

export default caesarCipher;
