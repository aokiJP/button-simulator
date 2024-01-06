import { ActionFormData } from "@minecraft/server-ui";
import { getScoreNumber } from "../../lib/getScore";
const places = [
    {
        name: "a",
        vector: {
            x: 0,
            y: 0,
            z: 0,
        },
        require: {
            money: 10e3,
        },
    },
];
export function teleport(player) {
    const form = new ActionFormData();
    form.title(`§l§dTeleport`);
    for (const place of places) {
        for (const [key, value] of Object.entries(place.require)) {
            const currentScore = getScoreNumber(player, key);
            if (value > currentScore)
                form.button(`${place.name}`);
        }
    }
    form.show(player).then(({ selection, canceled }) => {
        if (canceled)
            return;
        if (selection == undefined)
            return;
        const vector = places[selection].vector;
        player.teleport(vector);
    });
}

//# sourceMappingURL=../../../../_buttonAddonDebug/system/form/teleport.js.map
