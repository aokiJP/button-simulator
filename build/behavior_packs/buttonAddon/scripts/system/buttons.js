import { system, world } from "@minecraft/server";
import { properties, buttonConfigs, buttonCost, buttonConfigPoints, propertiesArray, buttonCostPoint, } from "../configs";
import { getScoreNumber } from "../lib/getScore";
import { magnification } from "./statuses";
let i = 0;
let j = 0;
const overworld = world.getDimension("overworld");
system.runInterval(() => {
    for (const { buttons, costProp, addProp, multiplierProp } of buttonConfigs) {
        processButtons(buttons, costProp, addProp, multiplierProp);
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
                for (const Class in properties) {
                    if (properties.point == Class)
                        continue;
                    if (addProperty == Class) {
                        switch (Class) {
                            case "multiplayer": {
                                add *= 5;
                                break;
                            }
                            case "rebirths": {
                                add *= 1;
                                break;
                            }
                            case "superRebirths": {
                                add *= 1;
                                break;
                            }
                            case "ultra": {
                                add *= 1;
                                break;
                            }
                            case "prestige": {
                                add *= 1;
                                break;
                            }
                            case "grass": {
                                add *= 1;
                                break;
                            }
                            case "plants": {
                                add *= 1;
                                break;
                            }
                            case "flowers": {
                                add *= 1;
                                break;
                            }
                            case "bones": {
                                add *= 1;
                                break;
                            }
                        }
                    }
                    if (costProperty == Class) {
                        switch (Class) {
                            case "multiplayer": {
                                cost *= 5;
                                break;
                            }
                            case "rebirths": {
                                cost *= 40;
                                break;
                            }
                            case "superRebirths": {
                                cost *= 80;
                                break;
                            }
                            case "ultra": {
                                cost *= 120;
                                break;
                            }
                            case "prestige": {
                                cost *= 150;
                                break;
                            }
                            case "grass": {
                                cost *= 180;
                                break;
                            }
                            case "plants": {
                                cost *= 210;
                                break;
                            }
                            case "flowers": {
                                cost *= 240;
                                break;
                            }
                            case "bones": {
                                cost *= 270;
                                break;
                            }
                        }
                    }
                }
                if (costScore < cost)
                    return;
                if (p.hasTag(`SE`))
                    p.playSound("random.orb");
                for (const Class in properties) {
                    if (addProperty == Class)
                        break;
                    if (properties.point == Class)
                        continue;
                    p.setDynamicProperty(Class, 0);
                }
                const buttonPressed = getScoreNumber(p, properties.playerInf.buttonPressed);
                p.setDynamicProperty(properties.playerInf.buttonPressed, buttonPressed + 1);
                if (multiplierProperty) {
                    const multiplier = getScoreNumber(p, multiplierProperty);
                    p.setDynamicProperty(addProperty, getScoreNumber(p, addProperty) + (add * ((multiplier + 1) * magnification[multiplierProperty])) / 3);
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
