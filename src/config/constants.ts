const CANVAS_SIZE = [400, 400];
const SNAKE_START = [
  [12, 10],
  [12, 11]
];
const APPLE_START = [12, 3];
const SCALE = 15;
const SPEED = 100;
const DIRECTIONS: { [key: number]: number[] } = {
  38: [0, -1],
  40: [0, 1],
  37: [-1, 0],
  39: [1, 0],
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
};