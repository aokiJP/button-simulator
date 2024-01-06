import { world, system } from "@minecraft/server";
import { getScoreNumber } from "../lib/getScore";
import { properties } from "../configs";
import { getTime } from "../lib/getTime";
export const musicOptions = {
    fade: 0.5,
    loop: true,
    volume: 1.0,
};
const overworld = world.getDimension("overworld");
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
        player.setDynamicProperty(properties.playerInf.joinTime, 1);
    }
}, 20);

//# sourceMappingURL=../../../_buttonAddonDebug/system/playerInf.js.map
