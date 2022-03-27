// 1234 is 10011010010 ==> 5

export const countBits = (n: number): number => {
  const bin = Number(n).toString(2);
  return bin.split(``).filter(digit => Number(digit) === 1).length
}


console.log(countBits(1234));