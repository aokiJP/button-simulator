import { ActionFormData, MessageFormData } from "@minecraft/server-ui";
import { gains, properties, propertiesArray } from "../../configs";
import { getScoreNumber } from "../../lib/getScore";
import { Form } from "./configs";
import { formatNumberWithExponent } from "../../lib/formatNumber";
let GainString = "";
let cost = 0;
export function gain(player) {
    const form = new ActionFormData();
    form.title(`§l§cAuto Gain`);
    for (const gain in gains) {
        switch (gain) {
            case "rebirths": {
                form.button(`§l§1${gain}\ncost: 10e3`);
                break;
            }
            case "superRebirths": {
                form.button(`§l§2${gain}\ncost: 500e3`);
                break;
            }
            case "ultra": {
                form.button(`§l§d${gain}\ncost: 2e6`);
                break;
            }
            case "prestige": {
                form.button(`§l§b${gain}\ncost: 2e9`);
                break;
            }
            case "grass": {
                form.button(`§l§a${gain}\ncost: 2e12`);
                break;
            }
            case "plants": {
                form.button(`§l§e${gain}\ncost: 2e15`);
                break;
            }
            case "flowers": {
                form.button(`§l§6${gain}\ncost: 2e18`);
                break;
            }
            case "bones": {
                form.button(`§l${gain}\ncost: 2e21`);
                break;
            }
        }
    }
    form.show(player).then(({ selection, canceled }) => {
        if (canceled)
            return;
        if (selection == undefined)
            return;
        switch (selection + 1) {
            case 1: {
                GainString = propertiesArray[1];
                cost = 10e3;
                break;
            }
            case 2: {
                GainString = propertiesArray[2];
                cost = 500e3;
                break;
            }
            case 3: {
                GainString = propertiesArray[3];
                cost = 2e6;
                break;
            }
            case 4: {
                GainString = propertiesArray[4];
                cost = 2e9;
                break;
            }
            case 5: {
                GainString = propertiesArray[5];
                cost = 2e12;
                break;
            }
            case 6: {
                GainString = propertiesArray[6];
                cost = 2e15;
                break;
            }
            case 7: {
                GainString = propertiesArray[7];
                cost = 2e18;
                break;
            }
            case 8: {
                GainString = propertiesArray[8];
                cost = 2e21;
                break;
            }
        }
        gainAdd(player);
    });
}
function gainAdd(player) {
    const form = new MessageFormData();
    form.body(`You fulfil the conditions for release. Do you want to release a new system?\nYou will lose ${formatNumberWithExponent(cost)} point. Are you OK?`);
    form.button2(`yes`);
    form.button1(`no`);
    form.show(player).then(({ selection, canceled }) => {
        if (canceled)
            return;
        if (!selection)
            return;
        for (const [key, values] of Object.entries(gains)) {
            if (key !== GainString)
                continue;
            const point = getScoreNumber(player, properties.point);
            if (point < cost) {
                shortage(player);
                return;
            }
            player.setDynamicProperty(values, true);
            player.setDynamicProperty(properties.point, point - cost);
        }
    });
}
function shortage(player) {
    const form = new MessageFormData();
    const point = getScoreNumber(player, properties.point);
    form.title(`§lspoint hortage`);
    form.body(`Not enough points.\nNumber of points needed: ${formatNumberWithExponent(cost - point)}`);
    form.button2(`§lreturn`);
    form.button1(`§lclose`);
    form.show(player).then(({ selection, canceled }) => {
        if (canceled)
            return;
        if (selection)
            Form.menu(player);
    });
}

//# sourceMappingURL=../../../../_buttonAddonDebug/system/form/gain.js.map
