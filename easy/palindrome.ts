export function isPalindrome(x: number): boolean {
  return x === Number(x.toString().split("").reverse().join(""));
}
