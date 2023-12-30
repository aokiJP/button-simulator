import { system, world } from "@minecraft/server";
import { getScoreNumber } from "../lib/getScore";
import { properties } from "../configs";

system.runInterval(() => {
  for (const player of world.getPlayers()) {
    const cash = getScoreNumber(player, properties.money);
    const multiplayer = getScoreNumber(player, properties.multiplayer);
    if (multiplayer) player.setDynamicProperty(properties.money, cash + multiplayer);
    else player.setDynamicProperty(properties.money, cash + 1);
    console.warn(cash + cash * (multiplayer + 1));
  }
}, 20);
