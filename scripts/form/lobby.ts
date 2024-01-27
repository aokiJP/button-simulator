import { Player } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";
import { Form } from "./configs";
import { Lobby } from "../configs";

export function lobby(player: Player): void {
  const form = new MessageFormData();
  form.title(`§l§bLobby`);
  form.body(`Do you teleport to the lobby?`);
  form.button2(`§lyes`);
  form.button1(`§lno`);
  form.show(player).then(({ selection }) => {
    if (selection) player.teleport(Lobby);
    else Form.menu(player);
  });
}
