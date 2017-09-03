"use strict";

function Ball(rectangle) {
  this.rectangle = rectangle
  this.velocity = new Vector(100.0, 100.0)
}

Ball.prototype.update = function(duration) {
  this.rectangle.setPosition(
    this.rectangle.getPosition().add(this.velocity.scale(duration.seconds())))
}

Ball.prototype.getRectangle = function() {
  return this.rectangle
}

Ball.prototype.collideX = function() {
  this.velocity.x = -this.velocity.x
  return this
}

Ball.prototype.collideY = function() {
  this.velocity.y = -this.velocity.y
  return this
}