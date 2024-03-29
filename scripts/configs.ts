import { Dimension, MusicOptions, world } from "@minecraft/server";

export interface Button {
  x: number;
  y: number;
  z: number;
}

export interface Status {
  name: string;
  magnifications: {
    money?: number;
    multiplayer?: number;
    rebirths?: number;
    superRebirths?: number;
    ultra?: number;
    prestige?: number;
    grass?: number;
    plants?: number;
    flowers?: number;
    bones?: number;
  };
}

interface Place {
  name: string;
  vector: {
    x: number;
    y: number;
    z: number;
  };
  require: {
    money?: number;
    multiplayer?: number;
    rebirths?: number;
    superRebirths?: number;
    ultra?: number;
    prestige?: number;
    grass?: number;
    plants?: number;
    flowers?: number;
    bones?: number;
  };
}

interface ButtonClasses {
  buttonClasses: {
    point: Array<Button>;
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

interface ButtonCost {
  cost: number;
  add: number;
}

export const teleportPlaces: Array<Place> = [
  {
    name: "a",
    vector: {
      x: 0,
      y: 0,
      z: 0,
    },
    require: {
      money: 10e3,
    },
  },
];

export const overworld: Dimension = world.getDimension("overworld");

export const Lobby = {
  x: 0,
  y: 0,
  z: 0,
};

export const musicOptions: MusicOptions = {
  fade: 0.5,
  loop: true,
  volume: 1.0,
};

export const buttonCost: Array<ButtonCost> = [
  { cost: 150, add: 2 },
  { cost: 250, add: 6 },
  { cost: 750, add: 18 },
  { cost: 3e3, add: 60 },
  { cost: 15e3, add: 200 },
  { cost: 75e3, add: 650 },
  { cost: 400e3, add: 1.6e3 },
  { cost: 20e6, add: 4e3 },
  { cost: 1e9, add: 7e3 },
  { cost: 50e9, add: 13e3 },
  { cost: 2e12, add: 26e3 },
  { cost: 60e12, add: 56e3 },
  { cost: 100e15, add: 240e3 },
  { cost: 4e18, add: 1e6 },
  { cost: 50e18, add: 2.4e6 },
  { cost: 2e21, add: 10e6 },
  { cost: 25e21, add: 20e6 },
  { cost: 5e24, add: 80e6 },
  { cost: 800e24, add: 300e6 },
  { cost: 10e27, add: 1.2e9 },
  { cost: 2e30, add: 4e9 },
  { cost: 1e33, add: 20e9 },
  { cost: 1e36, add: 80e9 },
  { cost: 1e39, add: 320e9 },
  { cost: 1e42, add: 1.3e12 },
  { cost: 1.24e45, add: 5e12 },
  { cost: 1.8e48, add: 20e12 },
  { cost: 3e51, add: 100e12 },
  { cost: 6e54, add: 500e12 },
  { cost: 15e57, add: 2.5e15 },
  { cost: 45e60, add: 15e15 },
  { cost: 150e63, add: 90e15 },
  { cost: 600e66, add: 540e15 },
  { cost: 3e69, add: 3.2e18 },
  { cost: 30e72, add: 20e18 },
];

export const buttonCostPoint: Array<ButtonCost> = [
  { cost: 1e21, add: 0.1 },
  { cost: 1e18, add: 10 },
  { cost: 1e15, add: 500 },
  { cost: 1e12, add: 1e3 },
  { cost: 1e9, add: 100e3 },
  { cost: 1e6, add: 1e9 },
  { cost: 1e3, add: 1e12 },
  { cost: 0.5e3, add: 1e15 },
  { cost: 0.1e3, add: 1e18 },
];

export const position: ButtonClasses = {
  buttonClasses: {
    point: [
      { x: -2, y: -60, z: 0 },
      { x: -2, y: -60, z: 2 },
      { x: -2, y: -60, z: 4 },
      { x: -2, y: -60, z: 6 },
      { x: -2, y: -60, z: 8 },
      { x: -2, y: -60, z: 10 },
      { x: -2, y: -60, z: 12 },
      { x: -2, y: -60, z: 14 },
      { x: -2, y: -60, z: 16 },
    ],
    multiplayer: [
      { x: 0, y: -60, z: 0 },
      { x: 0, y: -60, z: 2 },
      { x: 0, y: -60, z: 4 },
      { x: 0, y: -60, z: 6 },
      { x: 0, y: -60, z: 8 },
      { x: 0, y: -60, z: 10 },
      { x: 0, y: -60, z: 12 },
      { x: 0, y: -60, z: 14 },
      { x: 0, y: -60, z: 16 },
      { x: 0, y: -60, z: 18 },
      { x: 0, y: -60, z: 20 },
      { x: 0, y: -60, z: 22 },
      { x: 0, y: -60, z: 24 },
      { x: 0, y: -60, z: 26 },
      { x: 0, y: -60, z: 28 },
      { x: 0, y: -60, z: 30 },
      { x: 0, y: -60, z: 32 },
      { x: 0, y: -60, z: 34 },
      { x: 0, y: -60, z: 36 },
      { x: 0, y: -60, z: 38 },
      { x: 0, y: -60, z: 40 },
      { x: 0, y: -60, z: 42 },
      { x: 0, y: -60, z: 44 },
      { x: 0, y: -60, z: 46 },
      { x: 0, y: -60, z: 48 },
      { x: 0, y: -60, z: 50 },
      { x: 0, y: -60, z: 52 },
      { x: 0, y: -60, z: 54 },
      { x: 0, y: -60, z: 56 },
      { x: 0, y: -60, z: 58 },
      { x: 0, y: -60, z: 60 },
      { x: 0, y: -60, z: 62 },
      { x: 0, y: -60, z: 64 },
      { x: 0, y: -60, z: 66 },
      { x: 0, y: -60, z: 68 },
    ],
    rebirths: [
      { x: 2, y: -60, z: 0 },
      { x: 2, y: -60, z: 2 },
      { x: 2, y: -60, z: 4 },
      { x: 2, y: -60, z: 6 },
      { x: 2, y: -60, z: 8 },
      { x: 2, y: -60, z: 10 },
      { x: 2, y: -60, z: 12 },
      { x: 2, y: -60, z: 14 },
      { x: 2, y: -60, z: 16 },
      { x: 2, y: -60, z: 18 },
      { x: 2, y: -60, z: 20 },
      { x: 2, y: -60, z: 22 },
      { x: 2, y: -60, z: 24 },
      { x: 2, y: -60, z: 26 },
      { x: 2, y: -60, z: 28 },
      { x: 2, y: -60, z: 30 },
      { x: 2, y: -60, z: 32 },
      { x: 2, y: -60, z: 34 },
      { x: 2, y: -60, z: 36 },
      { x: 2, y: -60, z: 38 },
      { x: 2, y: -60, z: 40 },
      { x: 2, y: -60, z: 42 },
      { x: 2, y: -60, z: 44 },
      { x: 2, y: -60, z: 46 },
      { x: 2, y: -60, z: 48 },
      { x: 2, y: -60, z: 50 },
      { x: 2, y: -60, z: 52 },
      { x: 2, y: -60, z: 54 },
      { x: 2, y: -60, z: 56 },
      { x: 2, y: -60, z: 58 },
      { x: 2, y: -60, z: 60 },
      { x: 2, y: -60, z: 62 },
      { x: 2, y: -60, z: 64 },
      { x: 2, y: -60, z: 66 },
      { x: 2, y: -60, z: 68 },
    ],
    superRebirths: [
      { x: 4, y: -60, z: 0 },
      { x: 4, y: -60, z: 2 },
      { x: 4, y: -60, z: 4 },
      { x: 4, y: -60, z: 6 },
      { x: 4, y: -60, z: 8 },
      { x: 4, y: -60, z: 10 },
      { x: 4, y: -60, z: 12 },
      { x: 4, y: -60, z: 14 },
      { x: 4, y: -60, z: 16 },
      { x: 4, y: -60, z: 18 },
      { x: 4, y: -60, z: 20 },
      { x: 4, y: -60, z: 22 },
      { x: 4, y: -60, z: 24 },
      { x: 4, y: -60, z: 26 },
      { x: 4, y: -60, z: 28 },
      { x: 4, y: -60, z: 30 },
      { x: 4, y: -60, z: 32 },
      { x: 4, y: -60, z: 34 },
      { x: 4, y: -60, z: 36 },
      { x: 4, y: -60, z: 38 },
      { x: 4, y: -60, z: 40 },
      { x: 4, y: -60, z: 42 },
      { x: 4, y: -60, z: 44 },
      { x: 4, y: -60, z: 46 },
      { x: 4, y: -60, z: 48 },
      { x: 4, y: -60, z: 50 },
      { x: 4, y: -60, z: 52 },
      { x: 4, y: -60, z: 54 },
      { x: 4, y: -60, z: 56 },
      { x: 4, y: -60, z: 58 },
      { x: 4, y: -60, z: 60 },
      { x: 4, y: -60, z: 62 },
      { x: 4, y: -60, z: 64 },
      { x: 4, y: -60, z: 66 },
      { x: 4, y: -60, z: 68 },
    ],
    ultra: [
      { x: 6, y: -60, z: 0 },
      { x: 6, y: -60, z: 2 },
      { x: 6, y: -60, z: 4 },
      { x: 6, y: -60, z: 6 },
      { x: 6, y: -60, z: 8 },
      { x: 6, y: -60, z: 10 },
      { x: 6, y: -60, z: 12 },
      { x: 6, y: -60, z: 14 },
      { x: 6, y: -60, z: 16 },
      { x: 6, y: -60, z: 18 },
      { x: 6, y: -60, z: 20 },
      { x: 6, y: -60, z: 22 },
      { x: 6, y: -60, z: 24 },
      { x: 6, y: -60, z: 26 },
      { x: 6, y: -60, z: 28 },
      { x: 6, y: -60, z: 30 },
      { x: 6, y: -60, z: 32 },
      { x: 6, y: -60, z: 34 },
      { x: 6, y: -60, z: 36 },
      { x: 6, y: -60, z: 38 },
      { x: 6, y: -60, z: 40 },
      { x: 6, y: -60, z: 42 },
      { x: 6, y: -60, z: 44 },
      { x: 6, y: -60, z: 46 },
      { x: 6, y: -60, z: 48 },
      { x: 6, y: -60, z: 50 },
      { x: 6, y: -60, z: 52 },
      { x: 6, y: -60, z: 54 },
      { x: 6, y: -60, z: 56 },
      { x: 6, y: -60, z: 58 },
      { x: 6, y: -60, z: 60 },
      { x: 6, y: -60, z: 62 },
      { x: 6, y: -60, z: 64 },
      { x: 6, y: -60, z: 66 },
      { x: 6, y: -60, z: 68 },
    ],
    prestige: [
      { x: 8, y: -60, z: 0 },
      { x: 8, y: -60, z: 2 },
      { x: 8, y: -60, z: 4 },
      { x: 8, y: -60, z: 6 },
      { x: 8, y: -60, z: 8 },
      { x: 8, y: -60, z: 10 },
      { x: 8, y: -60, z: 12 },
      { x: 8, y: -60, z: 14 },
      { x: 8, y: -60, z: 16 },
      { x: 8, y: -60, z: 18 },
      { x: 8, y: -60, z: 20 },
      { x: 8, y: -60, z: 22 },
      { x: 8, y: -60, z: 24 },
      { x: 8, y: -60, z: 26 },
      { x: 8, y: -60, z: 28 },
      { x: 8, y: -60, z: 30 },
      { x: 8, y: -60, z: 32 },
      { x: 8, y: -60, z: 34 },
      { x: 8, y: -60, z: 36 },
      { x: 8, y: -60, z: 38 },
      { x: 8, y: -60, z: 40 },
      { x: 8, y: -60, z: 42 },
      { x: 8, y: -60, z: 44 },
      { x: 8, y: -60, z: 46 },
      { x: 8, y: -60, z: 48 },
      { x: 8, y: -60, z: 50 },
      { x: 8, y: -60, z: 52 },
      { x: 8, y: -60, z: 54 },
      { x: 8, y: -60, z: 56 },
      { x: 8, y: -60, z: 58 },
      { x: 8, y: -60, z: 60 },
      { x: 8, y: -60, z: 62 },
      { x: 8, y: -60, z: 64 },
      { x: 8, y: -60, z: 66 },
      { x: 8, y: -60, z: 68 },
    ],
    grass: [
      { x: 10, y: -60, z: 0 },
      { x: 10, y: -60, z: 2 },
      { x: 10, y: -60, z: 4 },
      { x: 10, y: -60, z: 6 },
      { x: 10, y: -60, z: 8 },
      { x: 10, y: -60, z: 10 },
      { x: 10, y: -60, z: 12 },
      { x: 10, y: -60, z: 14 },
      { x: 10, y: -60, z: 16 },
      { x: 10, y: -60, z: 18 },
      { x: 10, y: -60, z: 20 },
      { x: 10, y: -60, z: 22 },
      { x: 10, y: -60, z: 24 },
      { x: 10, y: -60, z: 26 },
      { x: 10, y: -60, z: 28 },
      { x: 10, y: -60, z: 30 },
      { x: 10, y: -60, z: 32 },
      { x: 10, y: -60, z: 34 },
      { x: 10, y: -60, z: 36 },
      { x: 10, y: -60, z: 38 },
      { x: 10, y: -60, z: 40 },
      { x: 10, y: -60, z: 42 },
      { x: 10, y: -60, z: 44 },
      { x: 10, y: -60, z: 46 },
      { x: 10, y: -60, z: 48 },
      { x: 10, y: -60, z: 50 },
      { x: 10, y: -60, z: 52 },
      { x: 10, y: -60, z: 54 },
      { x: 10, y: -60, z: 56 },
      { x: 10, y: -60, z: 58 },
      { x: 10, y: -60, z: 60 },
      { x: 10, y: -60, z: 62 },
      { x: 10, y: -60, z: 64 },
      { x: 10, y: -60, z: 66 },
      { x: 10, y: -60, z: 68 },
    ],
    plants: [
      { x: 12, y: -60, z: 0 },
      { x: 12, y: -60, z: 2 },
      { x: 12, y: -60, z: 4 },
      { x: 12, y: -60, z: 6 },
      { x: 12, y: -60, z: 8 },
      { x: 12, y: -60, z: 10 },
      { x: 12, y: -60, z: 12 },
      { x: 12, y: -60, z: 14 },
      { x: 12, y: -60, z: 16 },
      { x: 12, y: -60, z: 18 },
      { x: 12, y: -60, z: 20 },
      { x: 12, y: -60, z: 22 },
      { x: 12, y: -60, z: 24 },
      { x: 12, y: -60, z: 26 },
      { x: 12, y: -60, z: 28 },
      { x: 12, y: -60, z: 30 },
      { x: 12, y: -60, z: 32 },
      { x: 12, y: -60, z: 34 },
      { x: 12, y: -60, z: 36 },
      { x: 12, y: -60, z: 38 },
      { x: 12, y: -60, z: 40 },
      { x: 12, y: -60, z: 42 },
      { x: 12, y: -60, z: 44 },
      { x: 12, y: -60, z: 46 },
      { x: 12, y: -60, z: 48 },
      { x: 12, y: -60, z: 50 },
      { x: 12, y: -60, z: 52 },
      { x: 12, y: -60, z: 54 },
      { x: 12, y: -60, z: 56 },
      { x: 12, y: -60, z: 58 },
      { x: 12, y: -60, z: 60 },
      { x: 12, y: -60, z: 62 },
      { x: 12, y: -60, z: 64 },
      { x: 12, y: -60, z: 66 },
      { x: 12, y: -60, z: 68 },
    ],
    flowers: [
      { x: 14, y: -60, z: 0 },
      { x: 14, y: -60, z: 2 },
      { x: 14, y: -60, z: 4 },
      { x: 14, y: -60, z: 6 },
      { x: 14, y: -60, z: 8 },
      { x: 14, y: -60, z: 10 },
      { x: 14, y: -60, z: 12 },
      { x: 14, y: -60, z: 14 },
      { x: 14, y: -60, z: 16 },
      { x: 14, y: -60, z: 18 },
      { x: 14, y: -60, z: 20 },
      { x: 14, y: -60, z: 22 },
      { x: 14, y: -60, z: 24 },
      { x: 14, y: -60, z: 26 },
      { x: 14, y: -60, z: 28 },
      { x: 14, y: -60, z: 30 },
      { x: 14, y: -60, z: 32 },
      { x: 14, y: -60, z: 34 },
      { x: 14, y: -60, z: 36 },
      { x: 14, y: -60, z: 38 },
      { x: 14, y: -60, z: 40 },
      { x: 14, y: -60, z: 42 },
      { x: 14, y: -60, z: 44 },
      { x: 14, y: -60, z: 46 },
      { x: 14, y: -60, z: 48 },
      { x: 14, y: -60, z: 50 },
      { x: 14, y: -60, z: 52 },
      { x: 14, y: -60, z: 54 },
      { x: 14, y: -60, z: 56 },
      { x: 14, y: -60, z: 58 },
      { x: 14, y: -60, z: 60 },
      { x: 14, y: -60, z: 62 },
      { x: 14, y: -60, z: 64 },
      { x: 14, y: -60, z: 66 },
      { x: 14, y: -60, z: 68 },
    ],
    bones: [
      { x: 16, y: -60, z: 0 },
      { x: 16, y: -60, z: 2 },
      { x: 16, y: -60, z: 4 },
      { x: 16, y: -60, z: 6 },
      { x: 16, y: -60, z: 8 },
      { x: 16, y: -60, z: 10 },
      { x: 16, y: -60, z: 12 },
      { x: 16, y: -60, z: 14 },
      { x: 16, y: -60, z: 16 },
      { x: 16, y: -60, z: 18 },
      { x: 16, y: -60, z: 20 },
      { x: 16, y: -60, z: 22 },
      { x: 16, y: -60, z: 24 },
      { x: 16, y: -60, z: 26 },
      { x: 16, y: -60, z: 28 },
      { x: 16, y: -60, z: 30 },
      { x: 16, y: -60, z: 32 },
      { x: 16, y: -60, z: 34 },
      { x: 16, y: -60, z: 36 },
      { x: 16, y: -60, z: 38 },
      { x: 16, y: -60, z: 40 },
      { x: 16, y: -60, z: 42 },
      { x: 16, y: -60, z: 44 },
      { x: 16, y: -60, z: 46 },
      { x: 16, y: -60, z: 48 },
      { x: 16, y: -60, z: 50 },
      { x: 16, y: -60, z: 52 },
      { x: 16, y: -60, z: 54 },
      { x: 16, y: -60, z: 56 },
      { x: 16, y: -60, z: 58 },
      { x: 16, y: -60, z: 60 },
      { x: 16, y: -60, z: 62 },
      { x: 16, y: -60, z: 64 },
      { x: 16, y: -60, z: 66 },
      { x: 16, y: -60, z: 68 },
    ],
  },
};

export const properties = {
  point: "point",
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
    joinTime: "joinTime",
  },
};

export const propertiesArray = [
  "multiplayer",
  "rebirths",
  "superRebirths",
  "ultra",
  "prestige",
  "grass",
  "plants",
  "flowers",
  "bones",
];

export const gains = {
  rebirths: "rebirthsGains",
  superRebirths: "superRebirthsGains",
  ultra: "ultraGains",
  prestige: "prestigeGains",
  grass: "grassGains",
  plants: "plantsGains",
  flowers: "flowersGains",
  bones: "bonesGains",
};

export const obbyStatus: Array<Status> = [
  {
    name: "EventA",
    magnifications: {
      multiplayer: 10,
    },
  },
];

export const eventStatus: Array<Status> = [
  {
    name: "EventB",
    magnifications: {
      money: 100,
    },
  },
];

export const codeStatus: Array<Status> = [
  {
    name: "2024happyYEaR",
    magnifications: {
      money: 100,
      multiplayer: 50,
      rebirths: 25,
      superRebirths: 12.5,
      ultra: 6.25,
    },
  },
];

export const buttonConfigs = [
  {
    buttons: position.buttonClasses.multiplayer,
    costProp: properties.money,
    addProp: properties.multiplayer,
    multiplierProp: properties.rebirths,
  },
  {
    buttons: position.buttonClasses.rebirths,
    costProp: properties.multiplayer,
    addProp: properties.rebirths,
    multiplierProp: properties.superRebirths,
  },
  {
    buttons: position.buttonClasses.superRebirths,
    costProp: properties.rebirths,
    addProp: properties.superRebirths,
    multiplierProp: properties.ultra,
  },
  {
    buttons: position.buttonClasses.ultra,
    costProp: properties.superRebirths,
    addProp: properties.ultra,
    multiplierProp: properties.prestige,
  },
  {
    buttons: position.buttonClasses.prestige,
    costProp: properties.ultra,
    addProp: properties.prestige,
    multiplierProp: properties.grass,
  },
  {
    buttons: position.buttonClasses.grass,
    costProp: properties.prestige,
    addProp: properties.grass,
    multiplierProp: properties.plants,
  },
  {
    buttons: position.buttonClasses.plants,
    costProp: properties.grass,
    addProp: properties.plants,
    multiplierProp: properties.flowers,
  },
  {
    buttons: position.buttonClasses.flowers,
    costProp: properties.plants,
    addProp: properties.flowers,
    multiplierProp: properties.bones,
  },
  { buttons: position.buttonClasses.bones, costProp: properties.flowers, addProp: properties.bones },
];

export const buttonConfigPoints = [
  {
    buttons: position.buttonClasses.point,
    addProp: properties.point,
  },
];

export const color = [
  "§r§l",
  "§r§l§6",
  "§r§l§e",
  "§r§l§a",
  "§r§l§b",
  "§r§l§d",
  "§r§l§2",
  "§r§l§1",
  "§r§l§c",
  "§r§l§a",
  "§r§l",
];
