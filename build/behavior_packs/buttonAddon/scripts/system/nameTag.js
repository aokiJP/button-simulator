import { system, world } from "@minecraft/server";
import { getScoreNumber } from "../lib/getScore";
import { color, properties } from "../configs";
import { formatNumberWithExponent } from "../lib/formatNumber";
system.runInterval(() => {
    let i = 0;
    for (const player of world.getAllPlayers()) {
        const statuses = {
            bones: formatNumberWithExponent(getScoreNumber(player, properties.bones)),
            flowers: formatNumberWithExponent(getScoreNumber(player, properties.flowers)),
            plants: formatNumberWithExponent(getScoreNumber(player, properties.plants)),
            grass: formatNumberWithExponent(getScoreNumber(player, properties.grass)),
            prestige: formatNumberWithExponent(getScoreNumber(player, properties.prestige)),
            ultra: formatNumberWithExponent(getScoreNumber(player, properties.ultra)),
            superRebirths: formatNumberWithExponent(getScoreNumber(player, properties.superRebirths)),
            rebirths: formatNumberWithExponent(getScoreNumber(player, properties.rebirths)),
            multiplayer: formatNumberWithExponent(getScoreNumber(player, properties.multiplayer)),
            money: formatNumberWithExponent(getScoreNumber(player, properties.money)),
            point: formatNumberWithExponent(getScoreNumber(player, properties.point)),
        };
        player.nameTag = "";
        for (const [key, number] of Object.entries(statuses)) {
            player.nameTag = player.nameTag + `${color[i]}${key}: ${number}\n`;
            i++;
        }
        player.onScreenDisplay.setActionBar(player.nameTag);
    }
}, 2);

//# sourceMappingURL=../../../_buttonAddonDebug/system/nameTag.js.map
