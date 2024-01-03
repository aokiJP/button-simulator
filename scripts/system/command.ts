import { world } from "@minecraft/server";
import { gains, properties } from "../configs";

const prefix = "!";

world.beforeEvents.chatSend.subscribe((ev) => {
  const { message, sender: player } = ev;
  if (!message.startsWith(prefix)) return;
  ev.cancel = true;
  switch (message) {
    case "!reset": {
      for (const Class in properties) {
        player.setDynamicProperty(Class, 0);
      }
      for (const gain of Object.values(gains)) {
        player.setDynamicProperty(gain, 0);
      }
      break;
    }
  }
});
