interface Button {
  x: number;
  y: number;
  z: number;
  cost: number;
  add: number;
}

interface ButtonClasses {
  buttonClasses: {
    multiplayer: Array<Button>;
    rebirths: Array<Button>;
    superRebirths: Array<Button>;
    ultra: Array<Button>;
    prestige: Array<Button>;
    grass: Array<Button>;
    plants: Array<Button>;
    flowers: Array<Button>;
    bones: Array<Button>;
  };
}

export const config: ButtonClasses = {
  buttonClasses: {
    multiplayer: [{ x: -96, y: -59, z: -1, cost: 10, add: 10 }],
    rebirths: [{ x: -96, y: -59, z: -1, cost: 10, add: 10 }],
    superRebirths: [{ x: -96, y: -59, z: -1, cost: 10, add: 10 }],
    ultra: [{ x: -96, y: -59, z: -1, cost: 10, add: 10 }],
    prestige: [{ x: -96, y: -59, z: -1, cost: 10, add: 10 }],
    grass: [{ x: -96, y: -59, z: -1, cost: 10, add: 10 }],
    plants: [{ x: -96, y: -59, z: -1, cost: 10, add: 10 }],
    flowers: [{ x: -96, y: -59, z: -1, cost: 10, add: 10 }],
    bones: [{ x: -96, y: -59, z: -1, cost: 10, add: 10 }],
  },
};

export const properties = {
  player: {
    join: "join",
    buttonPressed: "buttonPressed",
    joinCount: "joinCount",
  },
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
};
