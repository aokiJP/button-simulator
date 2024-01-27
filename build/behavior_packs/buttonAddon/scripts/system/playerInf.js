import { world, system } from "@minecraft/server";
import { getScoreNumber } from "../lib/getScore";
import { musicOptions, overworld, properties } from "../configs";
import { getTime } from "../lib/getTime";
world.afterEvents.playerJoin.subscribe((ev) => {
    system.runTimeout(() => {
        const { playerName } = ev;
        const player = overworld.getPlayers({ name: playerName })[0];
        console.warn(player.getDynamicProperty(properties.playerInf.join));
        if (!player.getDynamicProperty(properties.playerInf.join))
            player.setDynamicProperty(properties.playerInf.join, getTime());
        const joinCount = getScoreNumber(player, properties.playerInf.joinCount);
        player.setDynamicProperty("joinCount", joinCount + 1);
        if (player.hasTag(`BGM`))
            player.playMusic("music.button", musicOptions);
        else
            console.warn(1);
    }, 100);
});
system.runInterval(() => {
    for (const player of world.getAllPlayers()) {
        player.setDynamicProperty(properties.playerInf.joinTime, getScoreNumber(player, properties.playerInf.joinTime) + 1);
    }
}, 20);

//# sourceMappingURL=../../../_buttonAddonDebug/system/playerInf.js.map
