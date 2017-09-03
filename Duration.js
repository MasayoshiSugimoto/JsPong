"use strict";

function Duration(timeInMilliseconds) {
  this.timeInMilliseconds = timeInMilliseconds
}

Duration.fromFrequency = function(frequency) {
  return new Duration(1000 / frequency)
}

Duration.prototype.milliseconds = function() {
  return this.timeInMilliseconds
}

Duration.prototype.seconds = function() {
  return this.timeInMilliseconds / 1000
}