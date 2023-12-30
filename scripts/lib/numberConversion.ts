export function formatNumberWithExponent(value: number, digits: number): string {
  if (Math.abs(value) < 10000) {
    return value.toFixed(0);
  } else {
    const sign = value < 0 ? "-" : "";
    const exponent = Math.floor(Math.log10(Math.abs(value)));
    const coefficient = Math.abs(value) / Math.pow(10, exponent);
    const formattedCoefficient = coefficient.toPrecision(digits);
    return `${sign}${formattedCoefficient}e${exponent}`;
  }
}
