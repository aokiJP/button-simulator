import { MessageFormData } from "@minecraft/server-ui";
import { properties } from "../../configs";
import { getScoreNumber } from "../../lib/getScore";
export function status(player) {
    const form = new MessageFormData();
    form.title(`§l§bPlayer Status`);
    form.body(`Player Status:\nJoinCount:${getScoreNumber(player, properties.playerInf.joinCount)}\nButtonPressed:${getScoreNumber(player, properties.playerInf.buttonPressed)}`);
    form.button2(`§lreturn`);
    form.button1(`§lclose`);
    form.show(player);
}

//# sourceMappingURL=../../../../_buttonAddonDebug/system/form/status.js.map
