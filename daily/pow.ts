function Power(base: number, exponent: number): number {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  if (exponent === -1) return 1 / base;
  let harf = Power(base, exponent >= 0 ? Math.floor(exponent / 2) : Math.ceil(exponent / 2));
  if (exponent % 2) {
    return harf * harf * Power(base, exponent % 2);
  } else {
    return harf * harf;
  }
  // write code here
}

console.log(Power(-2, 0))
console.log(Power(2, -10))