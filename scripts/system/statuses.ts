import { system, world } from "@minecraft/server";
import { codeStatus, eventStatus, obbyStatus, properties } from "../configs";

export let magnifications: { [key: string]: number } = {
  money: 1,
  multiplayer: 1,
  rebirths: 1,
  superRebirths: 1,
  ultra: 1,
  prestige: 1,
  grass: 1,
  plants: 1,
  flowers: 1,
  bones: 1,
};

system.runInterval(() => {
  for (const player of world.getAllPlayers()) {
    magnifications = {
      money: 1,
      multiplayer: 1,
      rebirths: 1,
      superRebirths: 1,
      ultra: 1,
      prestige: 1,
      grass: 1,
      plants: 1,
      flowers: 1,
      bones: 1,
    };
    for (const status of obbyStatus) {
      if (!player.hasTag(`obby:${status.name}`)) continue;
      for (const [key, value] of Object.entries(status.magnifications)) {
        if (typeof value !== "number") return;
        for (const Class in properties) {
          if (key !== Class) continue;
          magnifications[Class] += value;
        }
      }
    }
    for (const status of eventStatus) {
      if (!player.hasTag(`event:${status.name}`)) continue;
      for (const [key, value] of Object.entries(status.magnifications)) {
        if (typeof value !== "number") return;
        for (const Class in properties) {
          if (key !== Class) continue;
          magnifications[Class] += value;
        }
      }
    }
    for (const status of codeStatus) {
      if (!player.hasTag(`code:${status.name}`)) continue;
      for (const [key, value] of Object.entries(status.magnifications)) {
        if (typeof value !== "number") return;
        for (const Class in properties) {
          if (key !== Class) continue;
          magnifications[Class] += value;
        }
      }
    }
  }
});
