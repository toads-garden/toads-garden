import * as Phaser from "phaser";
import Garden from "./scenes/Garden";

const config = {
  width: 640,
  height: 480,
  parent: "game",
  backgroundColor: "#FFFFAC",
  title: "Tilemap",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 300 },
    },
  },
  scene: [Garden],
};

new Phaser.Game(config);
