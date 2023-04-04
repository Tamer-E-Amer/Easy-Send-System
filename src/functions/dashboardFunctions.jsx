/**
 * @description this function is used to get the summary of passed data according to passed length for returned summary: i.e: summery of a  problem or summery of a message
 * @param {*} text
 * @param {*} charNumber
 * @returns summerized text
 */
export const getSummary = (text, charNumber) => {
  if (text) return `${text.substr(0, charNumber)}...`;
};
