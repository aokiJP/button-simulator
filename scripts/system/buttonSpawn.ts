import { Entity, Vector3, system, world } from "@minecraft/server";
import { buttonCost, buttonCostPoint, config } from "../configs";
import { formatNumberWithExponent } from "../lib/formatNumber";

let i: number = 0;

const overworld = world.getDimension("overworld");

system.runInterval(() => {
  for (const [key, buttons] of Object.entries(config.buttonClasses)) {
    for (const button of buttons) {
      const cost = key == "point" ? buttonCostPoint[i]?.cost : buttonCost[i]?.cost;
      const location: Vector3 = { x: button.x, y: button.y, z: button.z };

      if ([...overworld.getEntities({ location: location, maxDistance: 1, families: ["multiplayer"] })].length)
        continue;

      //const entity: Entity = overworld.spawnEntity(`an:${key}`, location);
      const entity: Entity = overworld?.spawnEntity(`an:multiplayer`, location);

      if (key == "point") {
        switch (i) {
          case 0: {
            entity.nameTag = `§l§c${formatNumberWithExponent(cost)}`;
            break;
          }
          case 1: {
            entity.nameTag = `§l§1${formatNumberWithExponent(cost)}`;
            break;
          }
          case 2: {
            entity.nameTag = `§l§2${formatNumberWithExponent(cost)}`;
            break;
          }
          case 3: {
            entity.nameTag = `§l§d${formatNumberWithExponent(cost)}`;
            break;
          }
          case 4: {
            entity.nameTag = `§l§b${formatNumberWithExponent(cost)}`;
            break;
          }
          case 5: {
            entity.nameTag = `§l§a${formatNumberWithExponent(cost)}`;
            break;
          }
          case 6: {
            entity.nameTag = `§l§e${formatNumberWithExponent(cost)}`;
            break;
          }
          case 7: {
            entity.nameTag = `§l§6${formatNumberWithExponent(cost)}`;
            break;
          }
          case 8: {
            entity.nameTag = `§l${formatNumberWithExponent(cost)}`;
            break;
          }
        }
      } else {
        switch (key) {
          case "multiplayer": {
            entity.nameTag = `§l§c${formatNumberWithExponent(cost)}`;
            break;
          }
          case "rebirths": {
            entity.nameTag = `§l§1${formatNumberWithExponent(cost * 1.5)}`;
            break;
          }
          case "superRebirths": {
            entity.nameTag = `§l§2${formatNumberWithExponent(cost * 2)}`;
            break;
          }
          case "ultra": {
            entity.nameTag = `§l§d${formatNumberWithExponent(cost * 10)}`;
            break;
          }
          case "prestige": {
            entity.nameTag = `§l§b${formatNumberWithExponent(cost * 15)}`;
            break;
          }
          case "grass": {
            entity.nameTag = `§l§a${formatNumberWithExponent(cost * 20)}`;
            break;
          }
          case "plants": {
            entity.nameTag = `§l§e${formatNumberWithExponent(cost * 25)}`;
            break;
          }
          case "flowers": {
            entity.nameTag = `§l§6${formatNumberWithExponent(cost * 50)}`;
            break;
          }
          case "bones": {
            entity.nameTag = `§l${formatNumberWithExponent(cost * 100)}`;
            break;
          }
        }
      }
      i++;
    }
    i = 0;
  }
}, 20);
