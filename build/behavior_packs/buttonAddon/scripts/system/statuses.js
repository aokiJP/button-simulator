import { system, world } from "@minecraft/server";
import { eventStatus, obbyStatus, properties } from "../configs";
export let magnification = {
    money: 1,
    multiplayer: 1,
    rebirths: 1,
    superRebirths: 1,
    ultra: 1,
    prestige: 1,
    grass: 1,
    plants: 1,
    flowers: 1,
    bones: 1,
};
system.runInterval(() => {
    for (const player of world.getAllPlayers()) {
        for (const status of obbyStatus) {
            if (!player.hasTag(status.name))
                continue;
            for (const [key, value] of Object.entries(status.magnification)) {
                if (typeof value !== "number")
                    return;
                for (const Class in properties) {
                    if (key !== Class)
                        continue;
                    magnification[Class] += value;
                }
            }
        }
        for (const status of eventStatus) {
            if (!player.hasTag(status.name))
                continue;
            for (const [key, value] of Object.entries(status.magnification)) {
                if (typeof value !== "number")
                    return;
                for (const Class in properties) {
                    if (key !== Class)
                        continue;
                    magnification[Class] += value;
                }
            }
        }
    }
});

//# sourceMappingURL=../../../_buttonAddonDebug/system/statuses.js.map
