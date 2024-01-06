import { world } from "@minecraft/server";
import { gains, properties } from "../configs";

const prefix = "!";

world.beforeEvents.chatSend.subscribe((ev) => {
  const { message, sender: player } = ev;
  if (!message.startsWith(prefix)) return;
  ev.cancel = true;
  switch (splitMessage(message)[0]) {
    case "reset": {
      for (const Class in properties) {
        player.setDynamicProperty(Class, 0);
      }
      for (const gain of Object.values(gains)) {
        player.setDynamicProperty(gain, 0);
      }
      break;
    }
    case "add": {
      const commands = splitMessage(message);
      if (!(commands[1] || commands[2])) return;
      for (const Class in properties) {
        if (Class == "playerInf" || Class !== commands[1]) continue;
        player.setDynamicProperty(Class, Number(commands[2]));
      }
      break;
    }
  }
});

function splitMessage(input: string): string[] {
  const parts: string[] = input.slice(1).split(" ");

  return parts;
}
