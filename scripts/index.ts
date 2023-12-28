import { Container, ItemStack, system, world } from "@minecraft/server";
import { ModalFormData, ActionFormData } from "@minecraft/server-ui";
import { config } from "./configs";

const overworld = world.getDimension("overworld");

system.runInterval(() => {
  for (const pos of config.buttonPos) {
    let i = 0;
    const player = overworld.getPlayers({ location: { x: pos.x, y: pos.y, z: pos.z } });
    if (!player) return;
    player.forEach((p) => {
      const button = overworld.getEntities({ location: { x: pos.x, y: pos.y, z: pos.z }, families: [""] })[0];
      const buttonProperty = {};
      const buttonCount = Number(p.getDynamicProperty("buttonCount")) ?? 0;
      p.sendMessage(``);
      p.setDynamicProperty("buttonCount", buttonCount + 1);
      switch (i) {
        case 0: {
          p.setDynamicProperty("multi", 1);
          break;
        }
        case 1: {
          p.setDynamicProperty("reb", 1);
          break;
        }
        case 2: {
          p.setDynamicProperty("", 1);
          break;
        }
        case 3: {
          p.setDynamicProperty("", 1);
          break;
        }
        case 4: {
          p.setDynamicProperty("", 1);
          break;
        }
      }
    });
    i++;
  }
}, 10);

system.runInterval(() => {
  for (const player of world.getAllPlayers()) {
    const cash = Number(player.getDynamicProperty("cash")) ?? 0;
    player.setDynamicProperty("cash", cash + 1);
  }
}, 20);

system.runInterval(() => {
  for (const player of world.getAllPlayers()) {
    player.setDynamicProperty("");
  }
}, 20);

world.afterEvents.playerJoin.subscribe((ev) => {
  const { playerName } = ev;
  const player = overworld.getPlayers({ name: playerName })[0];
  if (!player.getDynamicProperty("join")) player.setDynamicProperty("join", getTime());
  const joinCount = Number(player.getDynamicProperty("joinCount")) ?? 0;
  player.setDynamicProperty("joinCount", joinCount + 1);
  console.warn(getTime());
});

function getTime() {
  const Year = new Date().getFullYear();
  const Month = new Date().getMonth() + 1;
  const Date_ = new Date().getDate();
  const Hour = new Date().getHours();
  const Min = new Date().getMinutes();
  const Sec = new Date().getSeconds();

  return Year + "年" + Month + "月" + Date_ + "日" + Hour + ":" + Min + ":" + Sec;
}
