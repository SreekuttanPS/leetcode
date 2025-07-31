function romanToInt(s) {
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
  // IV
  for (let i = 0; i < s.length; i++) {
    const current = romanLetters[s[i]];
    const next = romanLetters[s[p]];
    console.log("");
    console.log("current: ", current);
    console.log("next: ", next);
    if (next > current) {
      integer = integer - current;
    } else {
      integer = integer + current;
    }
    p++;
  }
  console.log("final: ", integer);
  return integer;
}

romanToInt("LVIII");
