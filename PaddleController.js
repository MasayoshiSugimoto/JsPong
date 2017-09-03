"use strict";

function PaddleKeyboardController (services, paddle, keyUp, keyDown, speed) {
  this.services = services
  this.paddle = paddle
  this.keyUp = keyUp
  this.keyDown = keyDown
  this.speed = speed
}

PaddleKeyboardController.prototype.update = function(duration) {
  let keyboard = this.services.getKeyboard()
  if (keyboard.isPressed(this.keyUp)) {
    this.paddle.move(-this.speed * duration.seconds())
  }
  if (keyboard.isPressed(this.keyDown)) {
    this.paddle.move(this.speed * duration.seconds())
  }
}