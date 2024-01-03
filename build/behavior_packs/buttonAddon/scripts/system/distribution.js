import { system, world } from "@minecraft/server";
import { getScoreNumber } from "../lib/getScore";
import { gains, properties } from "../configs";
system.runInterval(() => {
    for (const player of world.getAllPlayers()) {
        const cash = getScoreNumber(player, properties.money);
        const multiplayer = getScoreNumber(player, properties.multiplayer);
        if (multiplayer)
            player.setDynamicProperty(properties.money, cash + multiplayer);
        else
            player.setDynamicProperty(properties.money, cash + 1);
        player.setDynamicProperty(properties.multiplayer, multiplayer + 1);
        for (const [key, values] of Object.entries(gains)) {
            const score = getScoreNumber(player, values);
            const currentScore = getScoreNumber(player, key);
            if (!score)
                continue;
            player.setDynamicProperty(key, currentScore + score);
        }
    }
}, 2);

//# sourceMappingURL=../../../_buttonAddonDebug/system/distribution.js.map
