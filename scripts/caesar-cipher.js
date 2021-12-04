const caesarCipher = (string, key = 1) => {

  // map cipher rules to ascii character codes
  const cipher = {
    offsets: {
      normal: key,
      z: this.normal - 26,
      space: this.normal - 1,
    },

    // character codes for edge cases
    charCodes: {
      lowerZ: 122,
      upperZ: 90,
      space: 32,
    },
  };

  const encryptedChars = [];
  for (let i = 0; i < string.length; i += 1) {
    const charCode = string.charCodeAt(i);

    // choose the correct character code offset according to case
    let offset;
    switch (charCode) {
      case cipher.charCodes.space:
        offset = cipher.offsets.space;
        break;
      case cipher.charCodes.lowerZ:
      case cipher.charCodes.upperZ:
        offset = cipher.offsets.z;
        break;
      default:
        offset = cipher.offsets.normal;
    }

    // encrypt the character by applying the offset to its character code
    const encryptedCharCode = charCode + offset;
    const encryptedChar = String.fromCharCode(encryptedCharCode);

    encryptedChars.push(encryptedChar);
  }
  const encryptedString = encryptedChars.join('');

  return encryptedString;
};

export default caesarCipher;
