export function formatNumberWithExponent(num) {
    if (num === 0) {
        return "0";
    }
    const exponent = Math.floor(Math.log10(num) / 3) * 3;
    const coefficient = (num / Math.pow(10, exponent)).toFixed(2);
    const roundedCoefficient = parseFloat(coefficient).toFixed(2);
    if (exponent === 0) {
        return roundedCoefficient;
    }
    else {
        return `${roundedCoefficient}e${exponent}`;
    }
}

//# sourceMappingURL=../../../_buttonAddonDebug/lib/formatNumber.js.map
