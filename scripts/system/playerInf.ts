import { world } from "@minecraft/server";
import { getScoreNumber, getScoreString } from "../lib/getScore";
import { properties } from "../configs";
import { getTime } from "../lib/getTime";

const overworld = world.getDimension("overworld");

world.afterEvents.playerJoin.subscribe((ev) => {
  const { playerName } = ev;
  const player = overworld.getPlayers({ name: playerName })[0];
  if (getScoreString(player, properties.playerInf.join) == undefined)
    player.setDynamicProperty(properties.playerInf.join, getTime());
  const joinCount = getScoreNumber(player, properties.playerInf.joinCount);
  player.setDynamicProperty("joinCount", joinCount + 1);
});
