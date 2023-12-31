import { system, world } from "@minecraft/server";
import { formatNumberWithExponent } from "../lib/numberConversion";
import { getScoreNumber } from "../lib/getScore";
import { properties } from "../configs";

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
    player.sendMessage(player.nameTag);
  }
}, 20);
