export const getSummary = (text, charNumber) => {
  if (text) return `${text.substr(0, charNumber)}...`;
};
