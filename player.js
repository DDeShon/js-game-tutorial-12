export class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 91.3;
    this.x = this.game.width / 2 - this.width;
    this.y = this.game.height - this.height;
  }
  update() {}
  draw(context) {
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
