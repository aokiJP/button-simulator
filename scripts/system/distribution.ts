import { system, world } from "@minecraft/server";
import { getScoreNumber } from "../lib/getScore";
import { gains, properties } from "../configs";
import { magnifications } from "./statuses";

system.runInterval(() => {
  for (const player of world.getAllPlayers()) {
    const cash: number = getScoreNumber(player, properties.money);
    const multiplayer: number = getScoreNumber(player, properties.multiplayer);
    const rebirths: number = getScoreNumber(player, properties.rebirths);

    if (multiplayer) player.setDynamicProperty(properties.money, cash + multiplayer * magnifications.money);
    else player.setDynamicProperty(properties.money, cash + 1 * magnifications.money);

    if (rebirths)
      player.setDynamicProperty(properties.multiplayer, multiplayer + (rebirths / 10) * magnifications.multiplayer);
    player.setDynamicProperty(properties.multiplayer, multiplayer + 0.5 * magnifications.multiplayer);

    for (const [key, values] of Object.entries(gains)) {
      const bool = player.getDynamicProperty(values);
      const currentScore = getScoreNumber(player, key);
      if (!bool) continue;
      player.setDynamicProperty(key, currentScore + 1);
    }
  }
}, 2);
