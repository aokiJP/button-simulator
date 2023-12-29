export function convertToNumber(input: string): number {
  const unitMap: Record<string, number> = {
    b: 1e9,
    m: 1e6,
    k: 1e3,
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
  const unitMap: Record<string, number> = {
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
