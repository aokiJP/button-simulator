import { world } from "@minecraft/server";
import { properties } from "../configs";
const prefix = "!";
world.beforeEvents.chatSend.subscribe((ev) => {
    const { message, sender: player } = ev;
    if (!message.startsWith(prefix))
        return;
    ev.cancel = true;
    switch (message) {
        case "!reset": {
            player.setDynamicProperty(properties.money, 0);
            player.setDynamicProperty(properties.multiplayer, 0);
            player.setDynamicProperty(properties.rebirths, 0);
            player.setDynamicProperty(properties.superRebirths, 0);
            player.setDynamicProperty(properties.ultra, 0);
            player.setDynamicProperty(properties.prestige, 0);
            player.setDynamicProperty(properties.grass, 0);
            player.setDynamicProperty(properties.plants, 0);
            player.setDynamicProperty(properties.flowers, 0);
            player.setDynamicProperty(properties.bones, 0);
            break;
        }
    }
});

//# sourceMappingURL=../../../_buttonAddonDebug/system/command.js.map
