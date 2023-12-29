export function convertToNumber(input: string): number {
  const unitMap: Record < string, number > = {
    k: 1e3,
    m: 1e6,
    b: 1e9,
    t: 1e12,
    qd: 1e15,
    qn: 1e18,
    sx: 1e21,
    sp: 1e24,
    oc: 1e27,
    no: 1e30,
    de: 1e33,
    ude: 1e36,
    dde: 1e39,
    tde: 1e42,
    qdde: 1e45,
    qnde: 1e48,
    sxde: 1e51,
    spde: 1e54,
    ocde: 1e57,
    node: 1e60
  };

  const match = input.match(/(\d+(\.\d+)?)\s*([a-z]*)/i);
  if (!match) {
    throw new Error("Invalid input format");
  }

  const value = parseFloat(match[1]);
  const unit = match[3].toLowerCase();

  if (isNaN(value) || !unitMap[unit]) {
    throw new Error("Invalid number or unit");
  }

  return value * unitMap[unit];
}

export function convertToStringWithUnits(number: number): string {
  const unitMap: Record < string, number > = {
    billion: 1e9,
    million: 1e6,
    thousand: 1e3,
  };

  for (const [unit, value] of Object.entries(unitMap)) {
    if (number >= value) {
      const result = number / value;
      return `${result.toFixed(2)} ${unit}`;
    }
  }

  return number.toString();
}

export function formatNumberWithExponent(value: number, digits: number): string {
    const exponent = Math.floor(Math.log10(value));
    const coefficient = value / Math.pow(10, exponent);
    const formattedCoefficient = coefficient.toPrecision(digits);

    return `${formattedCoefficient}e${exponent}`;
}
