import { system, world } from "@minecraft/server";
import { config } from "../configs";
import { formatNumberWithExponent } from "../lib/formatNumber";
const overworld = world.getDimension("overworld");
system.runInterval(() => {
    for (const [key, buttons] of Object.entries(config.buttonClasses)) {
        for (const button of buttons) {
            const location = { x: button.x, y: button.y, z: button.z };
            if ([...overworld.getEntities({ location: location, maxDistance: 1, families: ["multiplayer"] })].length)
                continue;
            //const entity: Entity = overworld.spawnEntity(`an:${key}`, location);
            const entity = overworld.spawnEntity(`an:multiplayer`, location);
            switch (key) {
                case "multiplayer": {
                    entity.nameTag = `§l§c${formatNumberWithExponent(button.cost)}`;
                    break;
                }
                case "rebirths": {
                    entity.nameTag = `§l§1${formatNumberWithExponent(button.cost)}`;
                    break;
                }
                case "superRebirths": {
                    entity.nameTag = `§l§2${formatNumberWithExponent(button.cost)}`;
                    break;
                }
                case "ultra": {
                    entity.nameTag = `§l§d${formatNumberWithExponent(button.cost)}`;
                    break;
                }
                case "prestige": {
                    entity.nameTag = `§l§b${formatNumberWithExponent(button.cost)}`;
                    break;
                }
                case "grass": {
                    entity.nameTag = `§l§a${formatNumberWithExponent(button.cost)}`;
                    break;
                }
                case "plants": {
                    entity.nameTag = `§l§e${formatNumberWithExponent(button.cost)}`;
                    break;
                }
                case "flowers": {
                    entity.nameTag = `§l§6${formatNumberWithExponent(button.cost)}`;
                    break;
                }
                case "bones": {
                    entity.nameTag = `§l${formatNumberWithExponent(button.cost)}`;
                    break;
                }
            }
        }
    }
}, 20);

//# sourceMappingURL=../../../_buttonAddonDebug/system/buttonSpawn.js.map
