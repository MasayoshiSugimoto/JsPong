"use strict";

function Vector(x, y) {
  this.x = x
  this.y = y
}

Vector.zero = function() {
  return new Vector(0.0, 0.0)
}

Vector.one = function() {
  return new Vector(1.0, 1.0)
}

Vector.prototype.add = function(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y)
}

Vector.prototype.substract = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y)
}

Vector.prototype.scale = function(scalar) {
  return new Vector(this.x * scalar, this.y * scalar)
}