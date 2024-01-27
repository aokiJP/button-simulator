import { ActionFormData } from "@minecraft/server-ui";
import { eventStatus, obbyStatus, codeStatus, color } from "../configs";
import { Form } from "./configs";
import { magnifications } from "../system/statuses";
let i = 0;
export function details1(player) {
    const form = new ActionFormData();
    let _magnifications = "";
    let i = 0;
    for (const [key, number] of Object.entries(magnifications).reverse()) {
        _magnifications = _magnifications + `${color[i]}${key} * ${number}\n`;
        i++;
    }
    form.title(`§l§9statusDetails`);
    form.body(_magnifications);
    form.button(`§l§cobbyStatus`);
    form.button(`§l§beventStatus`);
    form.button(`§l§acodeStatus`);
    form.show(player).then(({ selection, canceled }) => {
        if (canceled)
            return;
        switch (selection) {
            case 0: {
                details2(player, obbyStatus, selection);
                break;
            }
            case 1: {
                details2(player, eventStatus, selection);
                break;
            }
            case 2: {
                details2(player, codeStatus, selection);
                break;
            }
        }
    });
}
function details2(player, details, selection) {
    const form = new ActionFormData();
    title(form, selection);
    button(form, player, details);
    form.show(player).then(({ selection, canceled }) => {
        if (canceled)
            return;
        if (selection == undefined)
            return;
        const Class = details[selection];
        let magnifications = "";
        for (const [key, number] of Object.entries(Class.magnifications)) {
            magnifications = magnifications + `${key} * ${number}\n`;
            i++;
        }
        const form = new ActionFormData();
        form.title(`§l§9${Class.name}`);
        form.body(`name: ${Class.name}\n${magnifications}`);
        form.button(`§lreturn`);
        form.button(`§lclose`);
        form.show(player).then(({ selection, canceled }) => {
            if (canceled)
                return;
            switch (selection) {
                case 0: {
                    Form.menu(player);
                }
            }
        });
    });
}
function title(form, selection) {
    selection == 0
        ? form.title(`§l§9obbyStatus Details`)
        : selection == 1
            ? form.title(`§l§9eventStatus Details`)
            : selection == 2
                ? form.title(`§l§9codeStatus Details`)
                : 0;
}
function button(form, player, details) {
    for (const status of details)
        player.hasTag(`obby:${status.name}`) ||
            player.hasTag(`event:${status.name}`) ||
            player.hasTag(`code:${status.name}`)
            ? form.button(`§l§a${status.name}`)
            : form.button(`§l§c${status.name}`);
}

//# sourceMappingURL=../../../_buttonAddonDebug/form/details.js.map
