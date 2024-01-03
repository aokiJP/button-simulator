function spreadWater(position) {
  const radius = 1;

  for (let x = -radius; x <= radius; x++) {
    for (let y = -radius; y <= radius; y++) {
      for (let z = -radius; z <= radius; z++) {
        const targetPosition = {
          x: position.x + x,
          y: position.y + y,
          z: position.z + z,
        };

        // 対象のブロックが空気であるか確認
        const block = system.getBlock(targetPosition);
        if (block && block.blockIdentifier === "minecraft:air") {
          // 空気なら水に変更
          system.setBlock(targetPosition, "minecraft:water");
        }
      }
    }
  }
}
