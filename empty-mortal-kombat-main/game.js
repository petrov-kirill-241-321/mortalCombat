import { ARENA, ORIENTATIONS } from "./constants.js";
import { Fighter } from "./fighters.js";
import { draw } from "./draw.js";

export class Game {
  fighters = [];
  init() {
    this.initCanvas();
    this.initializeFighters();
    this.animate();
  }

  initCanvas() {
    const canvas = document.getElementById("canvas");
    canvas.width = ARENA.WIDTH;
    canvas.height = ARENA.HEIGHT;
    this.context = canvas.getContext("2d");
  }

  initializeFighters() {
    this.fighters[0] = new Fighter("subzero", ORIENTATIONS.LEFT);
    this.fighters[1] = new Fighter("kano", ORIENTATIONS.RIGHT);
  }

  animate() {
    draw(this.fighters[0], this.fighters[1], this.context);
    requestAnimationFrame(() => this.animate());
  }
}
