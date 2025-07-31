/* 
Longest Common Prefix
=====================
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/

function longestCommonPrefix(strs: string[]): string {
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

console.log("output: ", longestCommonPrefix(["cir","car"]));
