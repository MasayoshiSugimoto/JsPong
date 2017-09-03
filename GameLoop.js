"use strict";

function GameLoop(services) {
  this.services = services
}

GameLoop.prototype.update = function(duration) {
  //Update the paddle X coordinates in case of window resizing
  const screenSize = this.services.getScreen().getSize()
  const p2Paddle = this.services.getP2Paddle()
  p2Paddle.setPosition(new Vector(screenSize.x - p2Paddle.getSize().x, p2Paddle.getPosition().y))
  this.services.getFactory().getControlObjects().forEach( (controlObject) => {
    controlObject.update(duration)
  } )
  this.services.getFactory().getGameObjects().forEach( (gameObject) => {
    gameObject.update(duration)
  })
  this.services.getCollision().update()
  this.services.getField().update()
  this.services.getScreen().draw()
}