"use strict";

const KEYBOARD_KEY_W      = 87
const KEYBOARD_KEY_S      = 83
const KEYBOARD_KEY_UP     = 38
const KEYBOARD_KEY_DOWN   = 40

function Keyboard(services) {
  this.services = services
  this.keyPressed = []

  this.services.getWindow().onkeydown = (event) => {
    this.keyPressed[event.which] = true
  }

  this.services.getWindow().onkeyup = (event) => {
    this.keyPressed[event.which] = false
  }
}

Keyboard.prototype.isPressed = function(keyCode) {
  return this.keyPressed[keyCode]
}