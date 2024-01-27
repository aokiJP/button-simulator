import { ActionFormData } from "@minecraft/server-ui";
import { getScoreNumber } from "../lib/getScore";
import { teleportPlaces } from "../configs";
export function teleport(player) {
    const form = new ActionFormData();
    form.title(`§l§dTeleport`);
    for (const place of teleportPlaces) {
        for (const [key, value] of Object.entries(place.require)) {
            const currentScore = getScoreNumber(player, key);
            if (value < currentScore)
                form.button(`${place.name}`);
        }
    }
    form.show(player).then(({ selection, canceled }) => {
        if (canceled)
            return;
        if (selection == undefined)
            return;
        const vector = teleportPlaces[selection].vector;
        player.teleport(vector);
    });
}

//# sourceMappingURL=../../../_buttonAddonDebug/form/teleport.js.map
