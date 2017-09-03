"use strict";

function DrawRectangle(rectangle, screen, color) {
  this.rectangle = rectangle
  this.screen = screen
  this.color = color
}

DrawRectangle.prototype.draw = function() {
  let context = this.screen.getContext()
  context.fillStyle = this.color;
  context.fillRect(
    this.rectangle.getPosition().x,
    this.rectangle.getPosition().y,
    this.rectangle.getSize().x,
    this.rectangle.getSize().y)
}