import { Player } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { Status, eventStatus, obbyStatus, codeStatus, color } from "../configs";
import { Form } from "./configs";
import { magnifications } from "../system/statuses";

let i: number = 0;

export function details1(player: Player) {
  const form = new ActionFormData();
  let _magnifications: string = "";
  let i: number = 0;
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
    if (canceled) return;
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

function details2(player: Player, details: Array<Status>, selection: number) {
  const form = new ActionFormData();
  title(form, selection);
  button(form, player, details);
  form.show(player).then(({ selection, canceled }) => {
    if (canceled) return;
    if (selection == undefined) return;
    const Class = details[selection];
    let magnifications: string = "";
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
      if (canceled) return;
      switch (selection) {
        case 0: {
          Form.menu(player);
        }
      }
    });
  });
}

function title(form: ActionFormData, selection: number) {
  selection == 0
    ? form.title(`§l§9obbyStatus Details`)
    : selection == 1
    ? form.title(`§l§9eventStatus Details`)
    : selection == 2
    ? form.title(`§l§9codeStatus Details`)
    : 0;
}

function button(form: ActionFormData, player: Player, details: Array<Status>) {
  for (const status of details)
    player.hasTag(`obby:${status.name}`) ||
    player.hasTag(`event:${status.name}`) ||
    player.hasTag(`code:${status.name}`)
      ? form.button(`§l§a${status.name}`)
      : form.button(`§l§c${status.name}`);
}
