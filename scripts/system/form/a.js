let ids = [];

for (let i = 1, j = 0; i < 6; i++) {
  for (let loop = 0; loop < 5; loop++, j++) {
    const loca = { x: source.location.x + x * j, y: source.location.y + y * j + 1, z: source.location.z + z * j };
    let id = setTimeout(() => {
      ids[i] = id;
      const monster = source.dimension.getEntities({
        maxDistance: 1.5,
        closest: 1,
        location: loca,
        families: [`monster`],
      });
      if (monster.length >= 1) {
        hitdamege(monster[0], attick, source, 1, 0);
        for (let reset = i; reset < 6; reset++) {
          clearTimeout(ids[reset]);
        }
        return;
      }
    }, i);
  } // 5,00000
} //6
