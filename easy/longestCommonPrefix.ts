export function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = "";
  if (!strs.length) {
    return "";
  }
  let firstWord = strs?.[0];
  for (let i = 0; i < firstWord.length; i++) {
    const isLetterSame = strs.every((word) => firstWord[i] === word[i]);
    if (isLetterSame) {
      commonPrefix = commonPrefix + firstWord[i];
    } else {
      break;
    }
  }
  return commonPrefix;
}
