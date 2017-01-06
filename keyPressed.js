function keyPressed() {
  if (keyCode === UP_ARROW && snake.ySpeed != 1) {
    snake.dir(0, -1);
  }
  else if (keyCode === DOWN_ARROW && snake.ySpeed != -1) {
    snake.dir(0, 1);
  }
  else if (keyCode === LEFT_ARROW && snake.xSpeed != 1) {
    snake.dir(-1, 0);
  }
  else if (keyCode === RIGHT_ARROW && snake.xSpeed != -1) {
    snake.dir(1, 0);
  }
}