import { Player, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { Form } from "./configs";

world.afterEvents.itemUse.subscribe((ev) => {
  const { itemStack, source: player } = ev;
  if (itemStack.typeId !== "an:form") return;
  menu(player);
});

export function menu(player: Player) {
  const form = new ActionFormData();
  form.title(`§lMenu`);
  form.body(`§l§${player.nameTag}`);
  form.button(`§l§cAuto Gain`);
  form.button(`§l§bPlayer Status`);
  form.button(`§l§aObby`);
  form.show(player).then(({ selection, canceled }) => {
    if (canceled) return;
    switch (selection) {
      case 0: {
        Form.gain(player);
        break;
      }
      case 1: {
        Form.status(player);
        break;
      }
      case 2: {
        break;
      }
    }
  });
}
