import { MessageFormData } from "@minecraft/server-ui";
import { Form } from "./configs";
const Lobby = {
    x: 0,
    y: 0,
    z: 0,
};
export function lobby(player) {
    const form = new MessageFormData();
    form.title(`§l§bLobby`);
    form.body(`Do you teleport to the lobby?`);
    form.button2(`§lyes`);
    form.button1(`§lno`);
    form.show(player).then(({ selection }) => {
        if (selection)
            player.teleport(Lobby);
        else
            Form.menu(player);
    });
}

//# sourceMappingURL=../../../../_buttonAddonDebug/system/form/lobby.js.map
