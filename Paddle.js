"use strict";

function Paddle(rectangle) {
  this.rectangle = rectangle
}

Paddle.prototype.update = function() {
  
}

Paddle.prototype.move = function(yDelta) {
  this.rectangle.setPosition(new Vector(
    this.rectangle.getPosition().x,
    this.rectangle.getPosition().y + yDelta))
}

Paddle.prototype.getRectangle = function() {
  return this.rectangle
}

Paddle.prototype.collideX = function() {

}

Paddle.prototype.collideY = function() {
  
}