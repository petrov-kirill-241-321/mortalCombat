import { ARENA, ORIENTATIONS } from "./constants.js";

export function draw(fighter1, fighter2, context) {
  context.clearRect(0, 0, ARENA.WIDTH, ARENA.HEIGHT);
  drawFighter(fighter1, context);
  drawFighter(fighter2, context);

  //for test
  context.strokeStyle = "green";
  context.strokeRect(
    fighter1.x - fighter1.width / 2,
    fighter1.y - fighter1.height,
    fighter1.width,
    fighter1.height
  );
  context.strokeRect(
    fighter2.x - fighter2.width / 2,
    fighter2.y - fighter2.height,
    fighter2.width,
    fighter2.height
  );
}

function drawFighter(fighter, context) {
  const url = `./images/fighters/${fighter.name}/${fighter.orientation}/stand/0.png`;
  const currentImg = new Image();
  currentImg.src = url;
  const x =
    fighter.orientation === ORIENTATIONS.LEFT
      ? calculateXForLeftAlign(fighter, currentImg)
      : calculateXForRightAlign(fighter, currentImg);

  const y = fighter.y - currentImg.height;
  context.drawImage(currentImg, x, y);
}

function calculateXForLeftAlign(fighter, currentImg) {
  return fighter.x - fighter.width / 2;
}
function calculateXForRightAlign(fighter, currentImg) {
  return fighter.x + fighter.width / 2 - currentImg.width;
}
