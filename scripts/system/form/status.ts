import { Player } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";
import { properties } from "../../configs";
import { getScoreNumber } from "../../lib/getScore";
import { Form } from "./configs";

export function status(player: Player): void {
  const form = new MessageFormData();
  form.title(`§l§bPlayer Status`);
  form.body(
    `Player Status:\nJoinCount:${getScoreNumber(
      player,
      properties.playerInf.joinCount
    )}\nButtonPressed:${getScoreNumber(player, properties.playerInf.buttonPressed)}`
  );
  form.button2(`§lreturn`);
  form.button1(`§lclose`);
  form.show(player).then(({ selection }) => {
    if (selection) Form.menu(player);
  });
}
