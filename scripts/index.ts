import { Container, Entity, ItemStack, Player, system, world } from "@minecraft/server";
import { ModalFormData, ActionFormData } from "@minecraft/server-ui";
import { config, properties } from "./configs";
import { formatNumberWithExponent } from "./lib/unitConversion";

const overworld = world.getDimension("overworld");

system.runInterval(() => {
  for (const button of config.buttonClasses.multiplayer) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScoreNumber(p, properties.player.buttonPressed);
      const money = getScoreNumber(p, properties.money);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.money, money - button.cost);
      p.setDynamicProperty(properties.multiplayer, button.add * getScoreNumber(p, properties.rebirths));
    });
  }
  for (const button of config.buttonClasses.rebirths) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScoreNumber(p, properties.player.buttonPressed);
      const multiplayer = getScoreNumber(p, properties.multiplayer);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.multiplayer, multiplayer - button.cost);
      p.setDynamicProperty(properties.rebirths, button.add * getScoreNumber(p, properties.superRebirths));
    });
  }
  for (const button of config.buttonClasses.superRebirths) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScoreNumber(p, properties.player.buttonPressed);
      const rebirths = getScoreNumber(p, properties.rebirths);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.rebirths, rebirths - button.cost);
      p.setDynamicProperty(properties.superRebirths, button.add * getScoreNumber(p, properties.ultra));
    });
  }
  for (const button of config.buttonClasses.ultra) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScoreNumber(p, properties.player.buttonPressed);
      const superRebirths = getScoreNumber(p, properties.superRebirths);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.superRebirths, superRebirths - button.cost);
      p.setDynamicProperty(properties.ultra, button.add * getScoreNumber(p, properties.prestige));
    });
  }
  for (const button of config.buttonClasses.prestige) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScoreNumber(p, properties.player.buttonPressed);
      const ultra = getScoreNumber(p, properties.ultra);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.ultra, ultra - button.cost);
      p.setDynamicProperty(properties.prestige, button.add * getScoreNumber(p, properties.grass));
    });
  }
  for (const button of config.buttonClasses.grass) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScoreNumber(p, properties.player.buttonPressed);
      const prestige = getScoreNumber(p, properties.prestige);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.prestige, prestige - button.cost);
      p.setDynamicProperty(properties.grass, button.add * getScoreNumber(p, properties.plants));
    });
  }
  for (const button of config.buttonClasses.plants) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScoreNumber(p, properties.player.buttonPressed);
      const grass = getScoreNumber(p, properties.grass);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.grass, grass - button.cost);
      p.setDynamicProperty(properties.plants, button.add * getScoreNumber(p, properties.flowers));
    });
  }
  for (const button of config.buttonClasses.flowers) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScoreNumber(p, properties.player.buttonPressed);
      const flowers = getScoreNumber(p, properties.flowers);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.plants, flowers - button.cost);
      p.setDynamicProperty(properties.flowers, button.add * getScoreNumber(p, properties.bones));
    });
  }
  for (const button of config.buttonClasses.bones) {
    const player = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z } });
    if (!player) return;
    player.forEach((p) => {
      const buttonPressed = getScoreNumber(p, properties.player.buttonPressed);
      const flowers = getScoreNumber(p, properties.flowers);
      p.sendMessage(`x: ${button.x}, y: ${button.y}, z: ${button.z}`);
      p.setDynamicProperty(properties.player.buttonPressed, buttonPressed + 1);
      p.setDynamicProperty(properties.flowers, flowers - button.cost);
      p.setDynamicProperty(properties.bones, button.add);
    });
  }
}, 10);

system.runInterval(() => {
  for (const player of world.getAllPlayers()) {
    const cash = getScoreNumber(player, properties.money);
    player.setDynamicProperty(properties.money, cash * getScoreNumber(player, properties.multiplayer) + 1);
  }
}, 20);

system.runInterval(() => {
  for (const player of world.getAllPlayers()) {
    const status = {
      money: formatNumberWithExponent(getScoreNumber(player, properties.money), 4),
      multiplayer: formatNumberWithExponent(getScoreNumber(player, properties.multiplayer), 4),
      rebirths: formatNumberWithExponent(getScoreNumber(player, properties.rebirths), 4),
      superRebirths: formatNumberWithExponent(getScoreNumber(player, properties.superRebirths), 4),
      ultra: formatNumberWithExponent(getScoreNumber(player, properties.ultra), 4),
      prestige: formatNumberWithExponent(getScoreNumber(player, properties.prestige), 4),
      grass: formatNumberWithExponent(getScoreNumber(player, properties.grass), 4),
      plants: formatNumberWithExponent(getScoreNumber(player, properties.plants), 4),
      flowers: formatNumberWithExponent(getScoreNumber(player, properties.flowers), 4),
      bones: formatNumberWithExponent(getScoreNumber(player, properties.bones), 4),
    };
    player.nameTag = `§r§lbones: ${status.bones}\n§r§lflowers: ${status.flowers}\n§r§lplants: ${status.plants}\n§r§lgrass: ${status.grass}\n§r§lprestige: ${status.prestige}\n§r§lbones: ${status.ultra}\n§r§lsuperRebirths: ${status.superRebirths}\n§r§lrebirths: ${status.rebirths}\n§r§lmultiplayer: ${status.multiplayer}\n§r§lmoney: ${status.money}\n\n§r${player.name}`;
  }
}, 20);

world.afterEvents.playerJoin.subscribe((ev) => {
  const { playerName } = ev;
  const player = overworld.getPlayers({ name: playerName })[0];
  if (getScoreString(player, properties.player.join)) player.setDynamicProperty(properties.player.join, getTime());
  const joinCount = getScoreNumber(player, properties.player.joinCount);
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

function getScoreNumber(target: Player | Entity, property: string) {
  return Number(target.getDynamicProperty(property)) ?? 0;
}

function getScoreString(target: Player | Entity, property: string) {
  try {
    return target.getDynamicProperty(property);
  } catch {
    return undefined;
  }
}