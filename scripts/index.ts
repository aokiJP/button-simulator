import { Container, ItemStack, system, world } from "@minecraft/server";
import { ModalFormData, ActionFormData } from "@minecraft/server-ui";
import { config } from "./configs";
import "./Forms/index";
import "./Spawn/index";
import "./Commands/index";
import "./debug/index";

world.beforeEvents.itemUse.subscribe((ev) => {
  if (world.getDynamicProperty("main") == true) {
    if (!ev.source.hasTag("Builder") || ev.source.hasTag("Visitor")) ev.cancel = true;
  }
});

world.beforeEvents.playerBreakBlock.subscribe((ev) => {
  if (world.getDynamicProperty("main") == true) {
    if (!ev.player.hasTag("Builder") || ev.player.hasTag("Visitor")) ev.cancel = true;
  }
});

world.beforeEvents.playerPlaceBlock.subscribe((ev) => {
  if (world.getDynamicProperty("main") == true) {
    if (!ev.player.hasTag("Builder") || ev.player.hasTag("Visitor")) ev.cancel = true;
  }
});

world.beforeEvents.playerInteractWithBlock.subscribe((ev) => {
  if (world.getDynamicProperty("main") == true) {
    if (!ev.player.hasTag("Builder") || ev.player.hasTag("Visitor")) ev.cancel = true;
  }
});

world.beforeEvents.playerInteractWithEntity.subscribe((ev) => {
  if (world.getDynamicProperty("main") == true) {
    if (!ev.player.hasTag("Builder") || ev.player.hasTag("Visitor")) ev.cancel = true;
  }
});

world.beforeEvents.itemUseOn.subscribe((ev) => {
  if (world.getDynamicProperty("main") == true) {
    if (!ev.source.hasTag("Builder") || ev.source.hasTag("Visitor")) ev.cancel = true;
  }
});
