import { Container, Entity, ItemStack, Player, system, world } from "@minecraft/server";
import { ModalFormData, ActionFormData } from "@minecraft/server-ui";
import { config, properties } from "./configs";

const overworld = world.getDimension("overworld");

system.runInterval(() => {
  for (const button of config.buttonClasses.multiplayer) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScore(p, properties.player.buttonPressed);
      const money = getScore(p, properties.money);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.money, money - button.cost);
      p.setDynamicProperty(properties.multiplayer, button.add * getScore(p, properties.rebirths));
    });
  }
  for (const button of config.buttonClasses.rebirths) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScore(p, properties.player.buttonPressed);
      const multiplayer = getScore(p, properties.multiplayer);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.multiplayer, multiplayer - button.cost);
      p.setDynamicProperty(properties.rebirths, button.add * getScore(p, properties.superRebirths));
    });
  }
  for (const button of config.buttonClasses.superRebirths) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScore(p, properties.player.buttonPressed);
      const rebirths = getScore(p, properties.rebirths);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.rebirths, rebirths - button.cost);
      p.setDynamicProperty(properties.superRebirths, button.add * getScore(p, properties.rebirths));
    });
  }
  for (const button of config.buttonClasses.ultra) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScore(p, properties.player.buttonPressed);
      const superRebirths = getScore(p, properties.superRebirths);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.superRebirths, superRebirths - button.cost);
      p.setDynamicProperty(properties.ultra, button.add * getScore(p, properties.rebirths));
    });
  }
  for (const button of config.buttonClasses.prestige) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScore(p, properties.player.buttonPressed);
      const ultra = getScore(p, properties.ultra);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.ultra, ultra - button.cost);
      p.setDynamicProperty(properties.prestige, button.add * getScore(p, properties.rebirths));
    });
  }
  for (const button of config.buttonClasses.grass) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScore(p, properties.player.buttonPressed);
      const prestige = getScore(p, properties.prestige);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.prestige, prestige - button.cost);
      p.setDynamicProperty(properties.grass, button.add * getScore(p, properties.rebirths));
    });
  }
  for (const button of config.buttonClasses.plants) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScore(p, properties.player.buttonPressed);
      const plants = getScore(p, properties.plants);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.plants, plants - button.cost);
      p.setDynamicProperty(properties.flowers, button.add * getScore(p, properties.rebirths));
    });
  }
  for (const button of config.buttonClasses.flowers) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScore(p, properties.player.buttonPressed);
      const flowers = getScore(p, properties.flowers);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.flowers, flowers - button.cost);
      p.setDynamicProperty(properties.bones, button.add * getScore(p, properties.rebirths));
    });
  }
}, 10);

system.runInterval(() => {
  for (const player of world.getAllPlayers()) {
    const cash = getScore(player, properties.money);
    player.setDynamicProperty(properties.money, (cash + 1) * getScore(player, properties.multiplayer));
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

function getScore(target: Player | Entity, object: string) {
  return Number(target.getDynamicProperty(object)) ?? 0;
}
