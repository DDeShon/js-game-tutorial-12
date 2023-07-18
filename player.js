import { Sitting } from "./playerStates";

export class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 91.3;
    this.x = this.game.width / 2 - this.width;
    this.y = this.game.height - this.height;
    this.velocityY = 0;
    this.weight = 1;
    this.image = document.getElementById("player");
    this.speed = 0;
    this.maxSpeed = 10;
    this.states = [new Sitting(this)];
    this.currentState = this.states[0];
    this.currentState.enter();
  }
  update(input) {
    // horizontal movement
    this.x += this.speed;
    if (input.includes("ArrowRight")) this.speed = this.maxSpeed;
    else if (input.includes("ArrowLeft")) this.speed = -this.maxSpeed;
    else this.speed = 0;
    if (this.x < 0) this.x = 0;
    if (this.x > this.game.width - this.width)
      this.x = this.game.width - this.width;
    // vertical movement
    if (input.includes(" ") && this.onGround()) this.velocityY -= 30;
    this.y += this.velocityY;
    if (!this.onGround()) this.velocityY += this.weight;
    else this.velocityY = 0;
  }
  draw(context) {
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  onGround() {
    return this.y >= this.game.height - this.height;
  }
}
