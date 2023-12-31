export function getScoreNumber(target, property) {
    const dynamicProperty = target?.getDynamicProperty(property);
    if (typeof dynamicProperty === "number") {
        return dynamicProperty;
    }
    else {
        return 0;
    }
}
export function getScoreString(target, property) {
    const dynamicProperty = target?.getDynamicProperty(property);
    if (typeof dynamicProperty === "string") {
        return dynamicProperty;
    }
    else {
        return undefined;
    }
}

//# sourceMappingURL=../../../_buttonAddonDebug/lib/getScore.js.map
