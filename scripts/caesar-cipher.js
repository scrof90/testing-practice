const caesarCipher = (string) => {
  const cipher = {
    offsets: {
      normal: 1,
      z: -25,
      space: 0,
    },
    charCodes: {
      lowerZ: 122,
      upperZ: 90,
      space: 32,
    },
  };

  const encryptedString = [];
  for (let i = 0; i < string.length; i += 1) {
    const charCode = string.charCodeAt(i);
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
    const encryptedCharCode = charCode + offset;
    const encryptedChar = String.fromCharCode(encryptedCharCode);
    encryptedString.push(encryptedChar);
  }
  return encryptedString.join('');
};

export default caesarCipher;
