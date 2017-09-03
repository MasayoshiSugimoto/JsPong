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

Paddle.prototype.getPosition = function() {
  return this.rectangle.getPosition()
}

Paddle.prototype.setPosition = function(position) {
  this.rectangle.setPosition(position) 
}

Paddle.prototype.getSize = function() {
  return this.rectangle.getSize()
}

Paddle.prototype.collideX = function() {

}

Paddle.prototype.collideY = function() {
  
}