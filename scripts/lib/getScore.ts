import { Player, Entity } from "@minecraft/server";

export function getScoreNumber(target: Player | Entity, property: string): number {
  const dynamicProperty = target?.getDynamicProperty(property);

  if (typeof dynamicProperty === "number") {
    return dynamicProperty;
  } else {
    return 0;
  }
}

export function getScoreString(target: Player | Entity, property: string): string | undefined {
  const dynamicProperty = target?.getDynamicProperty(property);
  if (typeof dynamicProperty === "string") {
    return dynamicProperty;
  } else {
    return undefined;
  }
}
