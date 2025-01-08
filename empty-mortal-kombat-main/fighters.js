import {
  ORIENTATIONS,
  PLAYER_BOTTOM,
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
} from "./constants.js";

const START_X_POSITION = {
  [ORIENTATIONS.LEFT]: 100,
  [ORIENTATIONS.RIGHT]: 500,
};

export class Fighter {
  life = 100;
  width = PLAYER_WIDTH;
  height = PLAYER_HEIGHT;

  constructor(name, orientation) {
    this.name = name;
    this.orientation = orientation;
    this.x = START_X_POSITION[orientation];
    this.y = PLAYER_BOTTOM;
  }
}
