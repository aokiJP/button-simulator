import { Entity, Vector3, system, world } from "@minecraft/server";
import { buttonCost, config } from "../configs";
import { formatNumberWithExponent } from "../lib/formatNumber";

let i: number = 0;

const overworld = world.getDimension("overworld");

system.runInterval(() => {
  for (const [key, buttons] of Object.entries(config.buttonClasses)) {
    for (const button of buttons) {
      const cost = buttonCost[i]?.cost;
      i++;
      const location: Vector3 = { x: button.x, y: button.y, z: button.z };

      if ([...overworld.getEntities({ location: location, maxDistance: 1, families: ["multiplayer"] })].length)
        continue;

      //const entity: Entity = overworld.spawnEntity(`an:${key}`, location);
      const entity: Entity = overworld.spawnEntity(`an:multiplayer`, location);

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
          entity.nameTag = `§l§d${formatNumberWithExponent(cost * 2.5)}`;
          break;
        }
        case "prestige": {
          entity.nameTag = `§l§b${formatNumberWithExponent(cost * 3)}`;
          break;
        }
        case "grass": {
          entity.nameTag = `§l§a${formatNumberWithExponent(cost * 3.5)}`;
          break;
        }
        case "plants": {
          entity.nameTag = `§l§e${formatNumberWithExponent(cost * 4)}`;
          break;
        }
        case "flowers": {
          entity.nameTag = `§l§6${formatNumberWithExponent(cost * 4.5)}`;
          break;
        }
        case "bones": {
          entity.nameTag = `§l${formatNumberWithExponent(cost * 5)}`;
          break;
        }
      }
    }
    i = 0;
  }
}, 20);
