export function romanToInt(s: string): number {
  const romanLetters = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let p = 1;
  let integer = 0;
  for (let i = 0; i < s.length; i++) {
    const current = romanLetters[s[i]];
    const next = romanLetters[s[p]];
    if (next > current) {
      integer = integer - current;
    } else {
      integer = integer + current;
    }
    p++;
  }
  return integer;
}
