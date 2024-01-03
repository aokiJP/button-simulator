import { Player } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { gains, propertiesArray } from "../../configs";

let GainString: string = "";

export function gain(player: Player) {
  const form = new ActionFormData();
  form.title(`§l§cAuto Gain`);
  for (const gain in gains) {
    switch (gain) {
      case "multiplayer": {
        form.button(`§l§c${gain}`);
        break;
      }
      case "rebirths": {
        form.button(`§l§1${gain}`);
        break;
      }
      case "superRebirths": {
        form.button(`§l§2${gain}`);
        break;
      }
      case "ultra": {
        form.button(`§l§d${gain}`);
        break;
      }
      case "prestige": {
        form.button(`§l§b${gain}`);
        break;
      }
      case "grass": {
        form.button(`§l§a${gain}`);
        break;
      }
      case "plants": {
        form.button(`§l§e${gain}`);
        break;
      }
      case "flowers": {
        form.button(`§l§6${gain}`);
        break;
      }
      case "bones": {
        form.button(`§l${gain}`);
        break;
      }
    }
  }

  form.show(player).then(({ selection, canceled }) => {
    if (canceled) return;
    switch (selection) {
      case 0: {
        GainString = propertiesArray[0];
        break;
      }
      case 1: {
        GainString = propertiesArray[1];
        break;
      }
      case 2: {
        GainString = propertiesArray[2];
        break;
      }
      case 3: {
        GainString = propertiesArray[3];
        break;
      }
      case 4: {
        GainString = propertiesArray[4];
        break;
      }
      case 5: {
        GainString = propertiesArray[5];
        break;
      }
      case 6: {
        GainString = propertiesArray[6];
        break;
      }
      case 7: {
        GainString = propertiesArray[7];
        break;
      }
      case 8: {
        GainString = propertiesArray[8];
        break;
      }
    }
    gainAdd(player);
  });
}

function gainAdd(player: Player) {
  const form = new ModalFormData();
  form.slider(`Gain Up`, 0.1, 1, 0.01);
  form.show(player).then(({ formValues, canceled }) => {
    if (!formValues) return;
    if (canceled) return;
    for (const [key, values] of Object.entries(gains)) {
      if (key === GainString) player.setDynamicProperty(values, Math.floor(Number(formValues[0]) * 100) / 100);
    }
  });
}
