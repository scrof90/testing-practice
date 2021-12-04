const caesarCipher = (string) => {
  // map cipher rules to ascii character codes
  const offsets = {
    normal: 1,
    z: -25,
    symbol: 0,
  };

  // character codes for edge cases
  const charCodes = {
    upperA: 65,
    upperZ: 90,
    lowerA: 97,
    lowerZ: 122,
  };

  const encryptChar = (char) => {
    const charCode = char.charCodeAt(0);
    // choose the correct character code offset according to case
    let offset;
    if (charCode < charCodes.upperA || charCode > charCodes.lowerZ) {
      offset = offsets.symbol;
    } else if (charCode === charCodes.lowerZ || charCode === charCodes.upperZ) {
      offset = offsets.z;
    } else {
      offset = offsets.normal;
    }
    const encryptedCharCode = charCode + offset;
    return String.fromCharCode(encryptedCharCode);
  };

  const encryptedString = string.split('').map(encryptChar).join('');

  return encryptedString;
};

export default caesarCipher;
