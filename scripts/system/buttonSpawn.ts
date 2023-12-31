import { system, world } from "@minecraft/server";
import { config } from "../configs";
import { formatNumberWithExponent } from "../lib/numberConversion";

const overworld = world.getDimension("overworld");

system.runInterval(() => {
  for (const [key, buttons] of Object.entries(config.buttonClasses)) {
    for (const button of buttons) {
      const location = { x: button.x, y: button.y, z: button.z };

      if ([...overworld.getEntities({ location: location, maxDistance: 1, families: [key] })].length) continue;

      const entity = overworld.spawnEntity(`an:${key}`, location);
      switch (key) {
        case "multiplayer": {
          entity.nameTag = `§l${formatNumberWithExponent(button.cost, 4)}`;
          break;
        }
        case "rebirths": {
          entity.nameTag = `§l${formatNumberWithExponent(button.cost, 4)}`;
          break;
        }
        case "superRebirths": {
          entity.nameTag = `§l${formatNumberWithExponent(button.cost, 4)}`;
          break;
        }
        case "ultra": {
          entity.nameTag = `§l${formatNumberWithExponent(button.cost, 4)}`;
          break;
        }
        case "prestige": {
          entity.nameTag = `§l${formatNumberWithExponent(button.cost, 4)}`;
          break;
        }
        case "grass": {
          entity.nameTag = `§l${formatNumberWithExponent(button.cost, 4)}`;
          break;
        }
        case "plants": {
          entity.nameTag = `§l${formatNumberWithExponent(button.cost, 4)}`;
          break;
        }
        case "flowers": {
          entity.nameTag = `§l${formatNumberWithExponent(button.cost, 4)}`;
          break;
        }
        case "bones": {
          entity.nameTag = `§l${formatNumberWithExponent(button.cost, 4)}`;
          break;
        }
      }
    }
  }
});
