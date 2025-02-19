// utils/splitText.js
export const splitText = (text : string) => {
    return text.split('').map((char, index) => ({
      char,
      key: `${char}-${index}`,
    }));
  };
  