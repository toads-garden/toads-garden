import Player from "../gameObjects/Player";

class Garden extends Phaser.Scene {
  constructor() {
    super("Garden");
  }
  preload() {
    this.load.atlas("atlas", "./assets/img/toad-idle.png");
  }
  create() {
    this.player = new Player(this, 25, 400);
    this.inputs = this.input.keyboard.createCursorKeys();
  }
  update() {
    this.player.update(this.inputs);
  }
}

export default Garden;
