function countDigitOne(n) {
  let digit = 1;
  res = 0;
  let high = parseInt(n / 10);
  let low = 0;
  cur = n % 10;
  while (high !== 0 || cur != 0) {
    if (cur === 0) {
      res = res + high * digit;
    } else if (cur === 1) {
      res = res + high * digit + low + 1;
    } else {
      res = res + high * digit + digit;
    }
    low = low + cur * digit;
    cur = high % 10;
    high = parseInt(high / 10);
    digit = digit * 10;
  }
  return res;
}
