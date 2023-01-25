class Garden extends Phaser.Scene {
  constructor() {
    super("Garden");
  }
  preload() {
    this.load.atlas(
      "sheToad",
      "./public/assets/SheToad/cute mushroom idle.png"
    );
  }
  create() {}
  update() {}
}

export default Garden;
