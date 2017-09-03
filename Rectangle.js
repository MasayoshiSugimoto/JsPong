"use strict";

function Rectangle(position, size) {
  this.position = position
  this.size = size
}

Rectangle.zero = function() {
  return new Rectangle(Vector.zero(), Vector.zero())
}

Rectangle.one = function() {
  return new Rectangle(Vector.zero(), Vector.one())
}

Rectangle.prototype.getPosition = function() {
  return this.position
}

Rectangle.prototype.setPosition = function(position) {
  this.position = position
  return this
}

Rectangle.prototype.getSize = function() {
  return this.size
}

Rectangle.prototype.setSize = function(size) {
  this.size = size
  return this
}

Rectangle.prototype.getLeft = function() {
  return this.getPosition().x
}

Rectangle.prototype.getTop = function() {
  return this.getPosition().y
}

Rectangle.prototype.getRight = function() {
  return this.getPosition().x + this.getSize().x
}

Rectangle.prototype.getBottom = function() {
  return this.getPosition().y + this.getSize().y
}

Rectangle.prototype.isInside = function(vector) {
  return this.getLeft() <= vector.x && vector.x <= this.getRight()
    && this.getTop() <= vector.y && vector.y <= this.getBottom()
}

Rectangle.prototype.getVertices = function() {
  const vertices = []
  vertices.push(this.getPosition())
  vertices.push(this.getPosition().add(new Vector(0.0, this.getSize().x)))
  vertices.push(this.getPosition().add(this.getSize()))
  vertices.push(this.getPosition().add(new Vector(this.getSize().y, 0.0)))
  return vertices
}