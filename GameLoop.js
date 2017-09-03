"use strict";

function GameLoop(services) {
  this.services = services
}

GameLoop.prototype.update = function(duration) {
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