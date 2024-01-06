import { system, world } from "@minecraft/server";
import { getScoreNumber } from "../lib/getScore";
import { gains, properties } from "../configs";
import { magnification } from "./statuses";
system.runInterval(() => {
    for (const player of world.getAllPlayers()) {
        const cash = getScoreNumber(player, properties.money);
        const multiplayer = getScoreNumber(player, properties.multiplayer);
        const rebirths = getScoreNumber(player, properties.rebirths);
        if (multiplayer)
            player.setDynamicProperty(properties.money, cash + multiplayer * magnification.money);
        else
            player.setDynamicProperty(properties.money, cash + 1 * magnification.money);
        if (rebirths)
            player.setDynamicProperty(properties.multiplayer, multiplayer + (rebirths / 10) * magnification.multiplayer);
        player.setDynamicProperty(properties.multiplayer, multiplayer + 0.5 * magnification.multiplayer);
        for (const [key, values] of Object.entries(gains)) {
            const bool = player.getDynamicProperty(values);
            const currentScore = getScoreNumber(player, key);
            if (!bool)
                continue;
            player.setDynamicProperty(key, currentScore + 1);
        }
    }
}, 2);

//# sourceMappingURL=../../../_buttonAddonDebug/system/distribution.js.map
