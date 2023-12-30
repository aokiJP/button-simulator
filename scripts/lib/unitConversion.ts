export function formatNumberWithExponent(value: number, digits: number): string {
  const exponent = Math.floor(Math.log10(value));
  const coefficient = value / Math.pow(10, exponent);
  const formattedCoefficient = coefficient.toPrecision(digits);

  return `${formattedCoefficient}e${exponent}`;
}
