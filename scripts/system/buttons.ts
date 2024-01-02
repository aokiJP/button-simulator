import { system, world } from "@minecraft/server";
import { properties, Button, buttonConfigs } from "../configs";
import { getScoreNumber } from "../lib/getScore";
import {} from "../lib/formatNumber";

const overworld = world.getDimension("overworld");

system.runInterval(() => {
  for (const { buttons, costProp, addProp, multiplierProp } of buttonConfigs) {
    processButtons(buttons, costProp, addProp, multiplierProp);
  }
}, 10);

function processButtons(
  buttons: Button[],
  costProperty: string,
  addProperty: string,
  multiplierProperty?: string
): void {
  for (const button of buttons) {
    const players = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z }, maxDistance: 1 });

    if (players) {
      players.forEach((p) => {
        const cost = button.cost;
        const costScore = getScoreNumber(p, costProperty);

        if (costScore < cost) return;

        p.playSound("random.orb");

        const buttonPressed = getScoreNumber(p, properties.playerInf.buttonPressed);

        p.setDynamicProperty(properties.playerInf.buttonPressed, buttonPressed + 1);
        p.setDynamicProperty(costProperty, 0);

        if (multiplierProperty) {
          const multiplier = getScoreNumber(p, multiplierProperty);
          p.setDynamicProperty(addProperty, (getScoreNumber(p, addProperty) + button.add * (multiplier + 1)) * 2);
        } else {
          p.setDynamicProperty(addProperty, (getScoreNumber(p, addProperty) + button.add) * 2);
        }
      });
    }
  }
}
