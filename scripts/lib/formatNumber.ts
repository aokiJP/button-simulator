export function formatNumberWithExponent(num: number): string {
  if (num === 0) {
    return "0";
  }

  const exponent: number = Math.floor(Math.log10(num) / 3) * 3;
  const coefficient: string = (num / Math.pow(10, exponent)).toFixed(2);

  if (exponent === 0) {
    return num.toString();
  } else {
    return `${coefficient}e${exponent}`;
  }
}
