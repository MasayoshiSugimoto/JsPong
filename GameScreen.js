"use strict";

function GameScreen(services) {
  this.services = services
  this.canvasID = "screen"
  let canvas = services.getDocument().createElement('canvas')
  canvas.id = this.canvasID
  canvas.width = this.getSize().x
  canvas.height = this.getSize().y
  services.getDocument().body.appendChild(canvas)
}

GameScreen.prototype.getContext = function() {
  return this.services.getDocument().getElementById(this.canvasID).getContext("2d")
}

GameScreen.prototype.draw = function() {
  let canvas = this.services.getDocument().getElementById(this.canvasID)
  canvas.width = this.getSize().x
  canvas.height = this.getSize().y
  let context = this.getContext()
  let size = this.getSize()
  context.clearRect(0, 0, size.x, size.y)
  this.services.getFactory().getDrawObjects().forEach( (drawObject) => {
    drawObject.draw()
  } )
}

GameScreen.prototype.getSize = function() {
  return new Vector(this.services.getWindow().innerWidth, this.services.getWindow().innerHeight)
}

GameScreen.prototype.getCenter = function() {
  return this.getSize().scale(0.5)
}