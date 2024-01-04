import { world, system } from "@minecraft/server";
import { getScoreNumber } from "../lib/getScore";
import { properties } from "../configs";
const musicOptions = {
    fade: 0.5,
    loop: true,
    volume: 1.0,
};
const overworld = world.getDimension("overworld");
world.afterEvents.playerJoin.subscribe((ev) => {
    system.runTimeout(() => {
        const { playerName } = ev;
        const player = overworld.getPlayers({ name: playerName })[0];
        // if (!player.getDynamicProperty(properties.playerInf.join))
        //   player.setDynamicProperty(properties.playerInf.join, getTime());
        const joinCount = getScoreNumber(player, properties.playerInf.joinCount);
        player.setDynamicProperty("joinCount", joinCount + 1);
        player.playMusic("music.button", musicOptions);
    }, 100);
});

//# sourceMappingURL=../../../_buttonAddonDebug/system/playerInf.js.map
