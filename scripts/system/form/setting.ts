import { Player } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";
import { musicOptions } from "../playerInf";

export function setting(player: Player): void {
  const form = new ModalFormData();
  form.title(`§l§dSetting`);
  if (player.hasTag(`BGM`)) form.toggle(`BGM`, true);
  else form.toggle(`BGM`, false);
  if (player.hasTag(`SE`)) form.toggle(`SE`, true);
  else form.toggle(`SE`, false);

  form.show(player).then(({ formValues, canceled }) => {
    if (canceled) return;
    if (!formValues) return;
    if (formValues[0]) {
      player.addTag(`BGM`);
      player.stopMusic();
    }
    if (formValues[1]) {
      player.addTag(`SE`);
    }
    if (!formValues[0]) {
      player.removeTag(`BGM`);
      player.playMusic("music.button", musicOptions);
    }
    if (!formValues[1]) {
      player.removeTag(`SE`);
    }
  });
}
