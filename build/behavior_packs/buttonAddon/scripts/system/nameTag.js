import { system, world } from "@minecraft/server";
import { getScoreNumber } from "../lib/getScore";
import { properties } from "../configs";
import { formatNumberWithExponent } from "../lib/formatNumber";
system.runInterval(() => {
    for (const player of world.getAllPlayers()) {
        const status = {
            money: formatNumberWithExponent(getScoreNumber(player, properties.money)),
            multiplayer: formatNumberWithExponent(getScoreNumber(player, properties.multiplayer)),
            rebirths: formatNumberWithExponent(getScoreNumber(player, properties.rebirths)),
            superRebirths: formatNumberWithExponent(getScoreNumber(player, properties.superRebirths)),
            ultra: formatNumberWithExponent(getScoreNumber(player, properties.ultra)),
            prestige: formatNumberWithExponent(getScoreNumber(player, properties.prestige)),
            grass: formatNumberWithExponent(getScoreNumber(player, properties.grass)),
            plants: formatNumberWithExponent(getScoreNumber(player, properties.plants)),
            flowers: formatNumberWithExponent(getScoreNumber(player, properties.flowers)),
            bones: formatNumberWithExponent(getScoreNumber(player, properties.bones)),
        };
        player.nameTag = `§r§lbones: ${status.bones}\n§r§l§6flowers: ${status.flowers}\n§r§l§eplants: ${status.plants}\n§r§l§agrass: ${status.grass}\n§r§l§bprestige: ${status.prestige}\n§r§l§dultra: ${status.ultra}\n§r§l§2superRebirths: ${status.superRebirths}\n§r§l§1rebirths: ${status.rebirths}\n§r§l§cmultiplayer: ${status.multiplayer}\n§r§l§amoney: ${status.money}\n\n§r${player.name}`;
        player.onScreenDisplay.setActionBar(player.nameTag);
    }
}, 2);

//# sourceMappingURL=../../../_buttonAddonDebug/system/nameTag.js.map
