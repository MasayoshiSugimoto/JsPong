
function Factory(services) { 
  this.services = services
  this.controlObjects = []
  this.gameObjects = []
  this.drawObjects = []
}

Factory.prototype.createPaddle = function(rectangle) {
  const paddle = new Paddle(rectangle)
  this.gameObjects.push(paddle)
  this.createDrawRectangle(rectangle, "black")
  return paddle
}

Factory.prototype.createBall = function(rectangle) {
  const ball = new Ball(rectangle)
  this.gameObjects.push(ball)
  this.createDrawRectangle(rectangle, "black")
  return ball
}

Factory.prototype.createDrawRectangle = function(rectangle, color) {
  const drawRectangle = new DrawRectangle(rectangle, this.services.getScreen(), color)
  this.drawObjects.push(drawRectangle)
  return drawRectangle
}

Factory.prototype.createPaddleController = function(paddle, keyUp, keyDown, speed) {
  const paddleController =
      new PaddleKeyboardController(this.services, paddle, keyUp, keyDown, speed)
  this.controlObjects.push(paddleController)
  return paddleController
}

Factory.prototype.getControlObjects = function() {
  return this.controlObjects
}

Factory.prototype.getGameObjects = function() {
  return this.gameObjects
}

Factory.prototype.getDrawObjects = function() {
  return this.drawObjects
}