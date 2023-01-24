import * as Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  dom: { createContainer: true },
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "game",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: innerWidth,
    heigt: innerHeight,
  },
  scene: [],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  render: {
    pixelArt: true,
  },
};

const game = new Phaser.Game(config);
