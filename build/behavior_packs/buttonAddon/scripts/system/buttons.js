import { system, world } from "@minecraft/server";
import { properties, buttonConfigs, buttonCost, buttonConfigPoints, propertiesArray, buttonCostPoint, } from "../configs";
import { getScoreNumber } from "../lib/getScore";
let i = 0;
let j = 0;
const overworld = world.getDimension("overworld");
system.runInterval(() => {
    for (const { buttons, costProp, addProp, multiplierProp } of buttonConfigs) {
        processButtons(buttons, costProp, addProp, multiplierProp);
    }
    for (const { buttons, addProp } of buttonConfigPoints) {
        processButtonsPoint(buttons, addProp);
    }
}, 10);
system.runInterval(() => {
    for (const { buttons, addProp } of buttonConfigPoints) {
        processButtonsPoint(buttons, addProp);
    }
}, 20);
function processButtons(buttons, costProperty, addProperty, multiplierProperty) {
    for (const button of buttons) {
        const players = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z }, maxDistance: 1 });
        if (players) {
            players.forEach((p) => {
                let cost = buttonCost[i].cost;
                let add = buttonCost[i].add;
                const costScore = getScoreNumber(p, costProperty);
                if (costScore < cost)
                    return;
                p.playSound("random.orb");
                const buttonPressed = getScoreNumber(p, properties.playerInf.buttonPressed);
                p.setDynamicProperty(properties.playerInf.buttonPressed, buttonPressed + 1);
                for (const Class in properties) {
                    if (addProperty == Class)
                        break;
                    p.setDynamicProperty(Class, 0);
                    switch (Class) {
                        case "multiplayer": {
                            cost *= 1;
                            add *= 1;
                            break;
                        }
                        case "rebirths": {
                            cost *= 1.5;
                            add *= 1;
                            break;
                        }
                        case "superRebirths": {
                            cost *= 2;
                            add *= 1;
                            break;
                        }
                        case "ultra": {
                            cost *= 10;
                            add *= 1;
                            break;
                        }
                        case "prestige": {
                            cost *= 15;
                            add *= 1;
                            break;
                        }
                        case "grass": {
                            cost *= 20;
                            add *= 1;
                            break;
                        }
                        case "plants": {
                            cost *= 25;
                            add *= 1;
                            break;
                        }
                        case "flowers": {
                            cost *= 50;
                            add *= 1;
                            break;
                        }
                        case "bones": {
                            cost *= 100;
                            add *= 1;
                            break;
                        }
                    }
                }
                if (multiplierProperty) {
                    const multiplier = getScoreNumber(p, multiplierProperty);
                    p.setDynamicProperty(addProperty, getScoreNumber(p, addProperty) + add * (multiplier + 1));
                }
            });
        }
        i++;
    }
    i = 0;
}
function processButtonsPoint(buttons, addProperty) {
    for (const button of buttons) {
        const players = overworld.getPlayers({ location: { x: button.x, y: button.y, z: button.z }, maxDistance: 1 });
        if (players) {
            players.forEach((p) => {
                let cost = buttonCostPoint[j].cost;
                let add = buttonCostPoint[j].add;
                const costScore = getScoreNumber(p, propertiesArray[j]);
                if (costScore < cost)
                    return;
                p.playSound("random.orb");
                const buttonPressed = getScoreNumber(p, properties.playerInf.buttonPressed);
                p.setDynamicProperty(properties.playerInf.buttonPressed, buttonPressed + 1);
                p.setDynamicProperty(addProperty, getScoreNumber(p, addProperty) + add);
            });
        }
        j++;
    }
    j = 0;
}

//# sourceMappingURL=../../../_buttonAddonDebug/system/buttons.js.map
