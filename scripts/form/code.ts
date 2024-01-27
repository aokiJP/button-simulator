import { Player } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";
import { codeStatus } from "../configs";

export function code(player: Player): void {
  const form = new ModalFormData();
  form.title(`§l§6Code`);
  form.textField(`code`, `example: 2024happyYEaR`);

  form.show(player).then(({ formValues, canceled }) => {
    if (canceled) return;
    if (!formValues) return;
    for (const code of codeStatus) {
      const name = code.name;
      if (name !== formValues[0]) {
        player.sendMessage(`§l§6Incorrect code. §l§7==> ${formValues[0]}`);
        return;
      }
      player.addTag(`code:${name}`);
      player.sendMessage(`§lYou got the code. code name is ${name}.`);
    }
  });
}
