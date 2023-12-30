export function getScoreNumber(target, property) {
    const dynamicProperty = target.getDynamicProperty(property);
    if (typeof dynamicProperty === "number") {
        return dynamicProperty;
    }
    else {
        // プロパティが存在しない、または型が number でない場合は 0 を返す
        return 0;
    }
}
export function getScoreString(target, property) {
    const dynamicProperty = target.getDynamicProperty(property);
    if (typeof dynamicProperty === "string") {
        return dynamicProperty;
    }
    else {
        return undefined;
    }
}

//# sourceMappingURL=../../../_buttonAddonDebug/lib/getScore.js.map
