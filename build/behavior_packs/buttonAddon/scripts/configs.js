export const config = {
    buttonClasses: {
        multiplayer: [
            { x: 0, y: -60, z: 0, cost: 100, add: 100 },
            { x: 0, y: -60, z: 2, cost: 1000, add: 1000 },
            { x: 0, y: -60, z: 4, cost: 10000, add: 10000 },
            { x: 0, y: -60, z: 6, cost: 100000, add: 100000 },
            { x: 0, y: -60, z: 8, cost: 1000000, add: 1000000 },
            { x: 0, y: -60, z: 10, cost: 10000000, add: 10000000 },
            { x: 0, y: -60, z: 12, cost: 100000000, add: 100000000 },
            { x: 0, y: -60, z: 14, cost: 100, add: 100 },
            { x: 0, y: -60, z: 16, cost: 100, add: 100 },
        ],
        rebirths: [{ x: -96, y: -59, z: -1, cost: 10, add: 10000000000000000000000000000 }],
        superRebirths: [{ x: -96, y: -59, z: -1, cost: 1000, add: 1000000000 }],
        ultra: [{ x: -96, y: -59, z: -1, cost: 100, add: 1000000 }],
        prestige: [{ x: -96, y: -59, z: -1, cost: 100, add: 100000 }],
        grass: [{ x: -96, y: -59, z: -1, cost: 1000, add: 1000000000 }],
        plants: [{ x: -96, y: -59, z: -1, cost: 100, add: 100000000 }],
        flowers: [{ x: -96, y: -59, z: -1, cost: 100, add: 100000000 }],
        bones: [{ x: -96, y: -59, z: -1, cost: 1000000, add: 100000000000000000000000000000000 }],
    },
};
export const properties = {
    money: "money",
    multiplayer: "multiplayer",
    rebirths: "rebirths",
    superRebirths: "superRebirths",
    ultra: "ultra",
    prestige: "prestige",
    grass: "grass",
    plants: "plants",
    flowers: "flowers",
    bones: "bones",
    playerInf: {
        join: "join",
        buttonPressed: "buttonPressed",
        joinCount: "joinCount",
    },
};
export const buttonConfigs = [
    {
        buttons: config.buttonClasses.multiplayer,
        costProp: properties.money,
        addProp: properties.multiplayer,
        multiplierProp: properties.rebirths,
    },
    {
        buttons: config.buttonClasses.rebirths,
        costProp: properties.multiplayer,
        addProp: properties.rebirths,
        multiplierProp: properties.superRebirths,
    },
    {
        buttons: config.buttonClasses.superRebirths,
        costProp: properties.rebirths,
        addProp: properties.superRebirths,
        multiplierProp: properties.ultra,
    },
    {
        buttons: config.buttonClasses.ultra,
        costProp: properties.superRebirths,
        addProp: properties.ultra,
        multiplierProp: properties.prestige,
    },
    {
        buttons: config.buttonClasses.prestige,
        costProp: properties.ultra,
        addProp: properties.prestige,
        multiplierProp: properties.grass,
    },
    {
        buttons: config.buttonClasses.grass,
        costProp: properties.prestige,
        addProp: properties.grass,
        multiplierProp: properties.plants,
    },
    {
        buttons: config.buttonClasses.plants,
        costProp: properties.grass,
        addProp: properties.plants,
        multiplierProp: properties.flowers,
    },
    {
        buttons: config.buttonClasses.flowers,
        costProp: properties.plants,
        addProp: properties.flowers,
        multiplierProp: properties.bones,
    },
    { buttons: config.buttonClasses.bones, costProp: properties.flowers, addProp: properties.bones },
];

//# sourceMappingURL=../../_buttonAddonDebug/configs.js.map
